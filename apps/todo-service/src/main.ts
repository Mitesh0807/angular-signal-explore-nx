import express, { Request, Response, NextFunction } from 'express';
import * as path from 'path';
import { myDataSource } from './comman/database';
import { User } from './entity/User.entity';
import router from './routes';
const app = express();
app.use(cors());
myDataSource.initialize().then(() => {
  console.log('Data Source has been initialized!');
})
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.json());
app.use('/api', router);
// app.use('/', express.static(path.join(__dirname, 'public')));
const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
function cors() {
  return function(req: Request, res: Response, next: NextFunction) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, Content-Length, X-Requested-With'
    );
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  };
}

