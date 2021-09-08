import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import { UpdateUserUseCase } from './UpdateUserUseCase';

class UpdateUserController {
    constructor(private updateUserUserCase: UpdateUserUseCase) {}

    async handle(request: Request, response: Response) {
        const { id, name, email, password } = request.body;

        await this.updateUserUserCase.execute(+id, {
            name,
            email,
            password,
        });

        response.status(200).json('Changed User');
    }
}

export { UpdateUserController };
