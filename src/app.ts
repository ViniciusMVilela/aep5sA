import express from '../node_modules/express';
import { userRouter } from './controllers/userController';

const app = express();

app.use('/api/users', userRouter);

export { app };
