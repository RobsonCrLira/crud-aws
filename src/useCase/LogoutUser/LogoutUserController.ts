import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';

class LogoutUserController {
    async handle(request: Request, response: Response) {
        const token = request.headers.authorization;
        if (token) {
            response.cookie('token', null, { httpOnly: true });
        } else {
            throw new AppError('Logout unauthorized', 401);
        }
        response.status(200).json({ message: 'Logout authorized' });
    }
}
export { LogoutUserController };
