import { Sequelize } from 'sequelize';

const user = `${process.env.POSTGRES_USER}`;
const pass = `${process.env.POSTGRES_PASSWORD}`;
const db = `${process.env.POSTGRES_DB}`;

const dialect = 'postgres';
const host = `${process.env.POSTGRES_HOST}`;
const port = 5432;

const dbConnection = new Sequelize(user, pass, db, { dialect, host, port });

export { dbConnection };
