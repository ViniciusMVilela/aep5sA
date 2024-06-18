import express from '../node_modules/express';
import mongoose from '../node_modules/mongodb';
import bodyParser from '../node_modules/body-parser';
import { app } from './app';

const PORT = 3000;
const MONGO_URL = 'mongodb://127.0.0.1:27017/aep-api';

const server = express();
server.use(bodyParser.json());
server.use(express.static('public'));
server.use('/', app);

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    server.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB', err);
  });
