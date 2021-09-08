import { IUserRepository } from '../../repositories/IUserRepository';

class ListAllUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute() {
        const users = await this.userRepository.findAll();
        const userResponse = users.map((user) => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            };
        });

        return userResponse;
    }
}
export { ListAllUserUseCase };
