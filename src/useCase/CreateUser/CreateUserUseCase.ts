import { hash } from 'bcryptjs';
import * as yup from 'yup';
import { AppError } from '../../errors/AppError';
import { IUserRepository } from '../../repositories/IUserRepository';
import { ICreateUserRequestDTO, ICreateUserResponseDTO } from './CreateUserDTO';

class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(data: ICreateUserRequestDTO) {
        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required().min(8),
        });

        try {
            await schema.validate(data, { abortEarly: false });
        } catch (error) {
            throw new AppError(`${error}`);
        }

        const passwordHash = await hash(`${data.password}`, 8);

        const user = await this.userRepository.save({
            name: `${data.name}`,
            email: `${data.email}`,
            password: passwordHash,
        });

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

export { CreateUserUseCase };
