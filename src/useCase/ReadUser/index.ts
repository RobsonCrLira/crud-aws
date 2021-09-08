import { PostgresUsersRepository } from '../../repositories/implementation/PostgresUsersRepository';
import { ListUserController } from './ListUserController';

import { ListUserUseCase } from './ListUserUseCase';

const postPostgresUsersRepository = new PostgresUsersRepository();

const listUserUseCase = new ListUserUseCase(postPostgresUsersRepository);

const listUserController = new ListUserController(listUserUseCase);

export { listUserUseCase, listUserController };
