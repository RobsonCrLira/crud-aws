import { Request, Response } from 'express';
import { DeleteUserUseCase } from './DeleteUserUseCase';

class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase) {}

    async handle(request: Request, response: Response) {
        const { id } = request.params;

        await this.deleteUserUseCase.execute(+id);
        response.status(200).json({ message: 'User delete with success' });
    }
}
export { DeleteUserController };
