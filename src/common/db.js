const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('./config.js');

const User = require('../resources/users/user.model.js');
const Board = require('../resources/boards/board.model.js');
const Task = require('../resources/tasks/task.model.js');

const users = [
  new User({ name: 'admin', login: 'user', password: 'admin' }),
  new User({ name: 'user2', login: 'user', password: 'P@55w0rd' }),
  new User({ name: 'user3', login: 'user', password: 'P@55w0rd' })
];
const boards = [
  new Board({
    title: 'TITLE',
    columns: [{ id: 'string', title: 'string', order: 0 }]
  }),
  new Board({
    title: 'TITLE',
    columns: [{ id: 'string', title: 'string', order: 0 }]
  }),
  new Board({
    title: 'TITLE',
    columns: [{ id: 'string', title: 'string', order: 0 }]
  })
];

const tasks = [
  new Task({
    title: 'TITLE',
    order: 0,
    description: 'string',
    userId: 'string',
    boardId: 'string',
    columnId: 'string'
  }),
  new Task({
    title: 'TITLE',
    order: 0,
    description: 'string',
    userId: 'string',
    boardId: 'string',
    columnId: 'string'
  }),
  new Task({
    title: 'TITLE',
    order: 0,
    description: 'string',
    userId: 'string',
    boardId: 'string',
    columnId: 'string'
  })
];

const tasksId = () => {
  for (let i = 0; i < users.length; i++) {
    tasks[i].userId = users[i].id;
  }
  for (let i = 0; i < boards.length; i++) {
    tasks[i].boardId = boards[i].id;
  }
};

const connectToDB = cb => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log("we're connected!");
    db.dropDatabase();
    users.forEach(user => user.save());
    boards.forEach(board => board.save());
    tasksId();
    tasks.forEach(task => task.save());
    cb();
  });
};

module.exports = {
  connectToDB
};
