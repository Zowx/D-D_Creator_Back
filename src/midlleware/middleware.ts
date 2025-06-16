import { Prisma } from 'generated/prisma';
import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError, PrismaClientValidationError, PrismaClientRustPanicError } from 'generated/prisma/runtime/library';
import { Context, Next } from 'koa';
import * as fs from 'fs';
import * as path from 'path';

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

export const middleware = async (ctx: Context, next: Next) => {
    try {
        await next();
    } catch (error) {
        logErrorToFile(error, ctx);
        // Prisma errors
        if (error instanceof PrismaClientKnownRequestError) {
            ctx.status = 400;
            ctx.body = { error: 'Database error', message: error.message, code: error.code };
        } else if (error instanceof PrismaClientUnknownRequestError) {
            ctx.status = 500;
            ctx.body = { error: 'Unknown database error', message: error.message };
        } else if (error instanceof PrismaClientValidationError) {
            ctx.status = 422;
            ctx.body = { error: 'Validation error', message: error.message };
        } else if (error instanceof PrismaClientRustPanicError) {
            ctx.status = 500;
            ctx.body = { error: 'Database panic', message: error.message };
        } else if (error.status === 401) {
            ctx.status = 401;
            ctx.body = { error: 'Unauthorized', message: error.message };
        } else {
            // Autres erreurs génériques
            ctx.status = error.status || 500;
            ctx.body = { error: error.name || 'InternalServerError', message: error.message || 'Une erreur est survenue.' };
        }
    }
}