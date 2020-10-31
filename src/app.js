const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router.js');
const boardRouter = require('./resources/boards/board.router.js');
const taskRouter = require('./resources/tasks/task.router.js');
const loginRouter = require('./resources/login/login.router.js');
const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
const helmet = require('helmet');
const cors = require('cors');
const {
  handleErrors,
  handleUncaughtException,
  handleUnhandledPromiseRejection
} = require('./common/error-handler');
const { logRequest, logError } = require('./common/logger');
const checkToken = require('./resources/login/checkToken.js');
// const User = require('./resources/users/user.model');
// const bcrypt = require('bcrypt');

app.use(express.json());

app.use(helmet());
app.use(cors());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(logRequest);

app.use('/login', loginRouter);
app.use(checkToken);
app.use('/users', userRouter);
app.use('/boards', boardRouter);
boardRouter.use('/:id/tasks', taskRouter);

app.use(handleErrors, logError);

process
  .on('unhandledRejection', reason => {
    handleUnhandledPromiseRejection(reason);
  })
  .on('uncaughtException', (err, origin) => {
    handleUncaughtException(err, origin);
  });
// throw Error('Oops!');
// Promise.reject(Error('Oops!'));

module.exports = app;
