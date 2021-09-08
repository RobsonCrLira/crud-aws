import { AppError } from '../../errors/AppError';
import { IUserRepository } from '../../repositories/IUserRepository';

class ListUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(id: number) {
        const user = await this.userRepository.findById(id);

        const userResponse = {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };
        return userResponse;
    }
}
export { ListUserUseCase };
