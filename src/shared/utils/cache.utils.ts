import { promises as fsPromises, createWriteStream } from 'fs';
import { AbortSignal } from 'abort-controller';
import * as path from 'path';

interface CachedEntry<T> {
    timestamp: number;
    data: T;
}

export class CacheUtils {
    private static instance?: CacheUtils;

    private readonly cacheDir = path.join(__dirname, '..', '..', '..', 'media');
    private readonly cachePath = path.join(this.cacheDir, 'cache.json');
    private readonly cacheMap = new Map<string, CachedEntry<any>>();
    private readonly LifeTime = 1000 * 60; // 1 minute

    private DeleteTimeOut?: NodeJS.Timeout;
    private cacheLoaded: Promise<void>;

    private constructor() {
        this.initialize();
    }


    private async initialize(): Promise<void> {
        this.cacheLoaded = this.loadCacheFromFile();
        await this.cacheLoaded;
        this.setDeleteTimeout();
    }

    private setDeleteTimeout(): void {
        if (this.DeleteTimeOut) clearTimeout(this.DeleteTimeOut);
        this.DeleteTimeOut = setTimeout(() => {
            CacheUtils.instance = undefined;
        }, this.LifeTime);
    }

    private async loadCacheFromFile(): Promise<void> {
        try {
            const content = await fsPromises.readFile(this.cachePath, 'utf-8');
            const parsed: Record<string, CachedEntry<any>> = JSON.parse(content);

            const now = Date.now();
            for (const [key, entry] of Object.entries(parsed)) {
                if (now - entry.timestamp < 1000 * 60 * 60 * 24) {
                    this.cacheMap.set(key, entry);
                }
            }

            console.log('[Cache] Loaded from file with', this.cacheMap.size, 'entries');
        } catch {
            console.warn('[Cache] No existing cache file, starting fresh.');
            this.cacheMap.clear();
        }
    }

    private async saveCacheToFile(signal?: AbortSignal): Promise<void> {
        try {
            const json = JSON.stringify(Object.fromEntries(this.cacheMap), null, 2);
            await fsPromises.mkdir(this.cacheDir, { recursive: true });

            const writeStream = createWriteStream(this.cachePath, { encoding: 'utf-8' });

            if (signal?.aborted) {
                writeStream.destroy();
                throw new Error('Aborted before writing started');
            }

            const abortHandler = () => {
                writeStream.destroy(new Error('Write aborted by signal'));
            };

            signal?.addEventListener('abort', abortHandler);

            await new Promise<void>((resolve, reject) => {
                writeStream.on('error', reject);
                writeStream.on('finish', resolve);
                writeStream.write(json);
                writeStream.end();
            });

            signal?.removeEventListener('abort', abortHandler);
        } catch (err) {
            console.error('[Cache] Failed to write to file:', err);
            throw err;
        }
    }

    /**
     * Fetch and cache data from an endpoint.
     * @param endpoint Unique endpoint string used as cache key
     * @param lifeTime Cache validity duration (default: 5 minutes)
     * @param signal Optional AbortSignal to cancel the save operation
     */
    static async cacheData<T = any>(
        endpoint: string,
        lifeTime = 5 * 60 * 1000,
        signal?: AbortSignal
    ): Promise<T> {
        let self = CacheUtils.instance;
        if (!self) {
            CacheUtils.instance = new CacheUtils();
            self = CacheUtils.instance;
        }

        self.setDeleteTimeout();
        await self.cacheLoaded;

        const now = Date.now();
        const cached = self.cacheMap.get(endpoint);

        if (cached && now - cached.timestamp < 0) {
            return cached.data;
        }

        try {
            if (cached) console.log('[Cache] Expired cache, fetching new data from', endpoint);
            else console.log('[Cache] Fetching data from', endpoint);

            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            self.cacheMap.set(endpoint, { timestamp: now + lifeTime, data });

            // Save with optional abort support
            self.saveCacheToFile(signal).catch(err => {
                if (err.name === 'AbortError') {
                    console.warn('[Cache] Save aborted.');
                } else {
                    console.error('[Cache] Save failed:', err);
                }
            });

            return data;
        } catch (error) {
            console.error('[Cache] Fetch error:', error);
            throw error;
        }
    }
}
