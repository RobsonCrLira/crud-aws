import { PostgresUsersRepository } from '../../repositories/implementation/PostgresUsersRepository';
import { DeleteUserController } from './DeleteUserController';
import { DeleteUserUseCase } from './DeleteUserUseCase';

const postPostgresUsersRepository = new PostgresUsersRepository();
const deleteUserUseCase = new DeleteUserUseCase(postPostgresUsersRepository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController, deleteUserUseCase };
