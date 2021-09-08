import { IUserRepository } from '../../repositories/IUserRepository';

class DeleteUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(id: number) {
        await this.userRepository.delete(id);
    }
}

export { DeleteUserUseCase };
