import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError, PrismaClientValidationError, PrismaClientRustPanicError } from '@prisma/client/runtime/library';
import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { Context } from 'vm';

const logFilePath = path.join(__dirname, 'error.log');

function logErrorToFile(error: any, ctx: Context) {
    const logEntry = `[${new Date().toISOString()}] ${ctx.method} ${ctx.url}\n${JSON.stringify({
        status: error.status || 500,
        name: error.name,
        message: error.message,
        stack: error.stack,
        code: error.code,
    }, null, 2)}\n\n`;
    fs.appendFileSync(logFilePath, logEntry, { encoding: 'utf8' });
}

export const middleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await next();
    } catch (error) {
        console.error('Erreur capturée dans le middleware:', error);
        logErrorToFile(error, req);
    }
};

export const errorMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {
    logErrorToFile(error, req);

    if (error instanceof PrismaClientKnownRequestError) {
        res.status(400).json({ error: 'Database error', message: error.message, code: error.code });
    } else if (error instanceof PrismaClientUnknownRequestError) {
        res.status(500).json({ error: 'Unknown database error', message: error.message });
    } else if (error instanceof PrismaClientValidationError) {
        res.status(422).json({ error: 'Validation error', message: error.message });
    } else if (error instanceof PrismaClientRustPanicError) {
        res.status(500).json({ error: 'Database panic', message: error.message });
    } else if (error.status === 401) {
        res.status(401).json({ error: 'Unauthorized', message: error.message });
    } else if (error.status === 403) {
        res.status(403).json({ error: 'Forbidden', message: error.message });
    } else if (error.status === 404) {
        console.log('404 error:', error);
        res.status(404).json({ error: 'Not Found', message: error.message });
    }
    else {
        res.status(error.status || 500).json({
            error: error.name || 'InternalServerError',
            message: error.message || 'Une erreur est survenue.'
        });
    }
};