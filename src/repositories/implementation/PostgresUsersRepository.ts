import { User } from '../../database/User';
import { AppError } from '../../errors/AppError';
import { IUser } from '../../database/IUser';
import { IUserRepository } from '../IUserRepository';

class PostgresUsersRepository implements IUserRepository {
    async findByEmail(email: string): Promise<User> {
        const user = await User.findOne({ where: { email } });

        console.log(`user: ${user}`);
        if (!user) {
            throw new AppError(`User Exists User  ${email} `, 200);
        }

        return user;
    }

    async findById(id: any): Promise<User> {
        const user = await User.findOne({ where: { id } });

        if (!user) {
            throw new AppError(`User Exists User  ${id} `, 200);
        }

        return user;
    }

    async save(user: IUser): Promise<User> {
        const userExist = await User.findOne({ where: { email: user.email } });

        if (userExist) {
            throw new AppError(`User Exists User `, 200);
        }

        const users = await User.create(user);
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
}
export { PostgresUsersRepository };
