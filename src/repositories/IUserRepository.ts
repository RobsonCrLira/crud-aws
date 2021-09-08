/* eslint-disable no-unused-vars */
import { User } from '../database/User';
import { IUser } from '../useCase/UpdateUser/UpdateUserDTO';

interface IUserRepository {
    findByEmail(email: string): Promise<User>;
    findById(id: number): Promise<User>;
    save(user: IUser): Promise<User>;
    update(user: IUser, id: number): Promise<void>;
    delete(id: number): Promise<void>;
    findAll(): Promise<User[]>;
}
export { IUserRepository };
