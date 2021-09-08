import { AppError } from '../../errors/AppError';
import { IUserRepository } from '../../repositories/IUserRepository';

class ListUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(id: number) {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new AppError(`No records found for email: ${id}`);
        }
        return user;
    }
}
export { ListUserUseCase };
