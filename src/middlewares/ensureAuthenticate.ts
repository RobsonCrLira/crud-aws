import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/AuthConfig';
import { AppError } from '../errors/AppError';

export function ensureAuthenticate(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        throw new AppError('Unauthorized', 401);
    }
    const [, token] = authToken.split(' ');

    try {
        verify(token, authConfig.secret);
        return next();
    } catch (error) {
        throw new AppError('Unauthorized', 401);
    }
}
