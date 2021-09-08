import { Router } from 'express';
import { createUserController } from './useCase/CreateUser';
import { deleteUserController } from './useCase/DeleteUser';
import { listAllUserController } from './useCase/ReadAllUsers';
import { listUserController } from './useCase/ReadUser';
import { updateUserController } from './useCase/UpdateUser';

const routes = Router();

routes.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

routes.get('/users', (request, response) => {
    return listAllUserController.handle(request, response);
});

routes.patch('/users', (request, response) => {
    return updateUserController.handle(request, response);
});

routes.get('/users/:id', (request, response) => {
    return listUserController.handle(request, response);
});

routes.delete('/users/:id', (request, response) => {
    return deleteUserController.handle(request, response);
});

export { routes };
