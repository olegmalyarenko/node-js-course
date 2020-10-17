const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router.js');
const boardRouter = require('./resources/boards/board.router.js');
const taskRouter = require('./resources/tasks/task.router.js');
// const { finished } = require('stream');
const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
// const morgan = require('morgan');
const winston = require('./common/winston.js');

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

/* app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  const {method, url} = req;
  const start = Date.now();

  next();

  finished(res, () => {
    const ms = Date.now() - start;
    const { statusCode } = res;
    console.log(`${method} ${url} ${statusCode} [${ms} ms]}`);
  })
});
*/
app.use((req, res, next) => {
  winston.info(
    `${JSON.stringify(req.method)}  URL : ${JSON.stringify(
      `http://${req.hostname}${req.originalUrl}`
    )} req.body = ${JSON.stringify(req.body)} req.query = ${JSON.stringify(
      req.query
    )}`
  );
  next();
});

// app.use(morgan(':method  :status :url :response-time ms'));
app.use('/users', userRouter);
app.use('/boards', boardRouter);
boardRouter.use('/:id/tasks', taskRouter);

app.use((err, req, res, next) => {
  console.err(err.stack);
  res.status(500).send('Something broke!');
  next();
});

module.exports = app;
