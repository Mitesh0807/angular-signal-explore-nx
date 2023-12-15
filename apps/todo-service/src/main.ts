import express from 'express';
import * as path from 'path';
import { myDataSource } from './comman/database';
import { User } from './entity/User.entity';
import router from './routes';
const app = express();
myDataSource.initialize().then(() => {
  console.log('Data Source has been initialized!');
})
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.json());
app.use('/api', router);
app.get('/api', (req, res) => {
  const user = {
    name: 'test',
    email: 'test',
    password: 'test',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
  };
  myDataSource.getRepository(User).save(user);
  res.send({ message: 'Welcome to todo-service!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
