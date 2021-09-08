import { PostgresUsersRepository } from '../../repositories/implementation/PostgresUsersRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const postPostgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(postPostgresUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
