import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import { ListAllUserUseCase } from './ListAllUserUseCase';

class ListAllUserController {
    constructor(private listALlUserUseCase: ListAllUserUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const users = await this.listALlUserUseCase.execute();
            response.json(users);
        } catch (error) {
            throw new AppError(`${error}`);
        }
    }
}
export { ListAllUserController };
