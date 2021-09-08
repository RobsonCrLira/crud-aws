import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import { ListUserUseCase } from './ListUserUseCase';

class ListUserController {
    constructor(private listUserUseCase: ListUserUseCase) {}

    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const users = await this.listUserUseCase.execute(+id);
        response.json(users);
    }
}
export { ListUserController };
