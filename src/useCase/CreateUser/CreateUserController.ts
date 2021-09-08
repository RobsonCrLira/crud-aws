import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        const user = await this.createUserUseCase.execute({
            name,
            email,
            password,
        });

        return response.json(user);
    }
}
export { CreateUserController };
