import { Router } from 'express';
import { ensureAuthenticate } from './middlewares/ensureAuthenticate';
import { authenticateUserController } from './useCase/AuthenticateUser';
import { createUserController } from './useCase/CreateUser';
import { deleteUserController } from './useCase/DeleteUser';
import { logoutUserController } from './useCase/LogoutUser';
import { listAllUserController } from './useCase/ReadAllUsers';
import { listUserController } from './useCase/ReadUser';
import { updateUserController } from './useCase/UpdateUser';

const routes = Router();

routes.post('/login', (request, response) => {
    return authenticateUserController.handle(request, response);
});

routes.get('/logout', (request, response) => {
    return logoutUserController.handle(request, response);
});

routes.post('/users', ensureAuthenticate, (request, response) => {
    return createUserController.handle(request, response);
});

routes.get('/users', ensureAuthenticate, (request, response) => {
    return listAllUserController.handle(request, response);
});

routes.patch('/users', ensureAuthenticate, (request, response) => {
    return updateUserController.handle(request, response);
});

routes.get('/users/:id', ensureAuthenticate, (request, response) => {
    return listUserController.handle(request, response);
});

routes.delete('/users/:id', ensureAuthenticate, (request, response) => {
    return deleteUserController.handle(request, response);
});

export { routes };
