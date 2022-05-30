import { AppError } from '../../errors/AppError';
import { IUser } from '../../database/IUser';
import { IUserRepository } from '../IUserRepository';
import { User } from '../../database/User';

class PostgresUsersRepository implements IUserRepository {
    async findByEmail(email: string): Promise<User> {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            throw new AppError(`User Exists email: ${email} `, 200);
        }

        return user;
    }

    async findById(id: any): Promise<User> {
        const user = await User.findOne({ where: { id } });

        if (!user) {
            throw new AppError(`User not Exists ${id} `, 200);
        }

        return user;
    }

    async save(data: IUser): Promise<User> {
        const userExist = await User.findOne({ where: { email: data.email } });

        if (userExist) {
            throw new AppError(`User Exists User `, 200);
        }

        const users = await User.create(data);
        return users;
    }

    async delete(id: number): Promise<void> {
        const user = await User.findOne({ where: { id } });

        if (!user) {
            throw new AppError(`User not Exists User  ${id} `, 200);
        }

        await User.destroy({ where: { id } });
    }

    async findAll(): Promise<User[]> {
        const user = await User.findAll();
        return user;
    }

    async update(data: IUser, id: number): Promise<void> {
        const userExist = await User.findOne({ where: { id } });

        if (!userExist) {
            throw new AppError(`User not Exists User  ${id} `, 200);
        }

        await User.update(data, { where: { id } });
    }

    async auth(data: IUser): Promise<User> {
        const user = await User.findOne({ where: { email: data.email } });

        if (!user) {
            throw new AppError('Email/Password Incorrect !');
        }

        return user;
    }
}
export { PostgresUsersRepository };
