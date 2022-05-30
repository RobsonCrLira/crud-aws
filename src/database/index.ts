import { Sequelize } from 'sequelize';

const user = `${process.env.POSTGRES_USER}`;
const pass = `${process.env.POSTGRES_PASSWORD}`;
const db = `${process.env.POSTGRES_DB}`;

const dialect = 'postgres';
const host = `${process.env.POSTGRES_HOST}`;
const port = 5432;
const config = {
    dialect: 'postgres',
    host: process.env.DB_HOST as string,
    username: process.env.DB_USER as string,
    password: process.env.DB_PASS as string,
    database: process.env.DB_NAME as string,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
// const dbConnection = new Sequelize(user, pass, db, { dialect, host, port });

// export { dbConnection };
class Database {
    public connection!: Sequelize;

    constructor() {
        this.init();
    }

    init(): void {
        this.connection = new Sequelize(config);
    }
}

const dbConnection: Database = new Database();

export default dbConnection;
