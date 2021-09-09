import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import * as yup from 'yup';
import { IAuthenticateRequestDTO } from './AuthenticateDTO';
import authConfig from '../../config/AuthConfig';
import { AppError } from '../../errors/AppError';
import { IUserRepository } from '../../repositories/IUserRepository';

class AuthenticateUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(data: IAuthenticateRequestDTO) {
        const schema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().required().min(8),
        });

        try {
            await schema.validate(data, { abortEarly: false });
        } catch (error) {
            throw new AppError(`${error}`);
        }
        const user = await this.userRepository.auth(data);

        const passwordMatch = await compare(data.password, user.password);

        if (!passwordMatch) {
            throw new AppError('Email/Password Incorrect !');
        }

        const token = sign(
            {
                email: user.email,
            },
            authConfig.secret,
            {
                subject: user.email,
                expiresIn: authConfig.tokenExpiryTimeInSeconds,
            }
        );

        return token;
    }
}
export { AuthenticateUserUseCase };
