import { Exclude } from 'class-transformer';
import { DataTypes, Model } from 'sequelize';
import { dbConnection } from '.';
import { IUser } from './IUser';

class User extends Model<IUser> implements IUser {
    readonly id!: number;

    name!: string;

    email!: string;

    @Exclude()
    readonly password!: string;

    readonly createdAt!: Date;

    readonly updatedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: dbConnection,
    }
);

export { User, IUser };
