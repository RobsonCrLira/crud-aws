import { PostgresUsersRepository } from '../../repositories/implementation/PostgresUsersRepository';
import { UpdateUserController } from './UpdateUserController';
import { UpdateUserUseCase } from './UpdateUserUseCase';

const postgresUsersRepository = new PostgresUsersRepository();

const updateUserUserCase = new UpdateUserUseCase(postgresUsersRepository);

const updateUserController = new UpdateUserController(updateUserUserCase);

export { updateUserController, updateUserUserCase };
