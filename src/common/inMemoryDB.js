const User = require('../resources/users/user.model.js');
const Board = require('../resources/boards/board.model.js');
const Task = require('../resources/tasks/task.model.js');
const DB = {
  users: [],
  boards: [],
  tasks: []
};

for (let i = 0; i < 6; i++) {
  DB.users.push(new User());
  DB.boards.push(new Board());
  DB.tasks.push(new Task());
}

for (let i = 0; i < DB.users.length; i++) {
  DB.tasks[i].userId = DB.users[i].id;
  DB.tasks[i].boardId = DB.boards[i].id;
}
// console.log('DB', DB.tasks);

const getAll = async val => {
  if (val === 'users') {
    return DB.users;
  }
  if (val === 'boards') {
    return DB.boards;
  }
};

const getAllTasks = async id => {
  console.log('TASK ID', id);
  console.log('TASK DB', DB.tasks);
  return DB.tasks.filter(el => el.boardId === id);
};

const get = async (id, val) => {
  if (val === 'users') {
    return DB.users.filter(el => el.id === id)[0];
  }

  if (val === 'boards') {
    return DB.boards.filter(el => el.id === id)[0];
  }
};

const getTask = async (boardId, id) => {
  // console.log('TASKS', DB.tasks);
  const currentTask = DB.tasks.find(
    el => el.id === id && el.boardId === boardId
  );
  if (currentTask === undefined) {
    throw new Error('Task id undefined');
  }
  return currentTask;
};

const create = async (item, val) => {
  if (val === 'boards') {
    DB.boards.push(item);
    return item;
  }

  if (val === 'users') {
    DB.users.push(item);
    return item;
  }

  if (val === 'tasks') {
    DB.tasks.push(item);
    return item;
  }
};

const update = async (item, id, val) => {
  if (val === 'users') {
    const currentIndex = DB.users.findIndex(el => el.id === id);
    const newUser = new User({
      id,
      login: item.login,
      password: item.password,
      name: item.name
    });
    DB.users.splice(currentIndex, 1, newUser);

    return newUser;
  }

  if (val === 'boards') {
    const currentIndex = DB.boards.findIndex(el => el.id === id);
    const newBoard = new Board({
      id,
      title: item.title,
      columns: [...item.columns]
    });
    DB.boards.splice(currentIndex, 1, newBoard);

    return newBoard;
  }

  if (val === 'tasks') {
    const currentIndex = DB.tasks.findIndex(el => el.id === id);
    const newTask = new Task({
      id,
      title: item.title,
      order: item.order,
      description: item.description,
      userId: id,
      boardId: id,
      columnId: item.columnId
    });
    DB.tasks.splice(currentIndex, 1, newTask);

    return newTask;
  }
};

const remove = async (id, val) => {
  if (val === 'users') {
    const currentIndex = DB.users.findIndex(el => el.id === id);

    DB.tasks = DB.tasks.map(task => {
      if (task.userId === id) {
        return { ...task, userId: null };
      }
      return task;
    });
    console.log('DB TASKS', DB.tasks);
    return DB.users.splice(currentIndex, 1);
  }

  if (val === 'boards') {
    const currentIndex = DB.boards.findIndex(el => el.id === id);
    DB.tasks = DB.tasks.filter(task => task.boardId !== id);
    return DB.boards.splice(currentIndex, 1);
  }

  if (val === 'tasks') {
    const currentIndex = DB.tasks.findIndex(el => el.id === id);
    return DB.tasks.splice(currentIndex, 1);
  }
};

module.exports = {
  getAll,
  getAllTasks,
  get,
  getTask,
  create,
  update,
  remove
};
