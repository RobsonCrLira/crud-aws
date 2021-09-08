import { PostgresUsersRepository } from '../../repositories/implementation/PostgresUsersRepository';
import { ListAllUserController } from './ListAllUserController';
import { ListAllUserUseCase } from './ListAllUserUseCase';

const postPostgresUsersRepository = new PostgresUsersRepository();

const listAllUserUseCase = new ListAllUserUseCase(postPostgresUsersRepository);

const listAllUserController = new ListAllUserController(listAllUserUseCase);

export { listAllUserUseCase, listAllUserController };
