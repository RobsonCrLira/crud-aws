import { IUserRepository } from '../../repositories/IUserRepository';
import { IUpdateUserRequestDTO } from './UpdateUserDTO';

class UpdateUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(id: number, user: IUpdateUserRequestDTO) {
        await this.userRepository.update(user, id);
    }
}
export { UpdateUserUseCase };
