import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import { ListUserUseCase } from './ListUserUseCase';

class ListUserController {
    constructor(private listUserUseCase: ListUserUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;
        try {
            const users = await this.listUserUseCase.execute(+id);
            response.json(users);
        } catch (error) {
            throw new AppError(`${error}`);
        }
    }
}
export { ListUserController };
