import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import { DeleteUserUseCase } from './DeleteUserUseCase';

class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        try {
            await this.deleteUserUseCase.execute(+id);
            response.status(200).json({ message: 'User delete with success' });
        } catch (error) {
            throw new AppError(`${error}`);
        }
    }
}
export { DeleteUserController };
