import 'dotenv/config';
import { app } from './app';
import { dbConnection } from './database';

const port = process.env.PORT || 3000;

app.listen(port, async () => {
    await dbConnection.sync();
    console.log(`Server is running => port:${port}`);
});
