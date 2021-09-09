import { PostgresUsersRepository } from '../../repositories/implementation/PostgresUsersRepository';
import { AuthenticateUserController } from './AuthenticateUserController';
import { AuthenticateUserUseCase } from './AuthenticateUserUserCase';

const postgresUserRepository = new PostgresUsersRepository();

const authenticateUserUseCase = new AuthenticateUserUseCase(
    postgresUserRepository
);

const authenticateUserController = new AuthenticateUserController(
    authenticateUserUseCase
);

export { authenticateUserController, authenticateUserUseCase };
