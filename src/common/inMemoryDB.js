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

const getAll = async val => {
  if (val === 'users') {
    return DB.users;
  }
  if (val === 'boards') {
    return DB.boards;
  }
};

const getAllTasks = async id => {
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

const getTask = async (boardId, taskId) => {
  const currentTask = DB.tasks.find(
    el => el.id === taskId && el.boardId === boardId
  );
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
};
const updateTask = async (item, taskId) => {
  DB.tasks = DB.tasks.filter(task => task.id !== taskId);
  return DB.tasks.push(item);
};

const remove = async (id, val) => {
  if (val === 'users') {
    DB.tasks = DB.tasks.map(task => {
      if (task.userId === id) {
        return { ...task, userId: null };
      }
      return task;
    });
    return (DB.users = DB.users.filter(user => user.id !== id));
  }

  if (val === 'boards') {
    DB.tasks = DB.tasks.filter(task => task.boardId !== id);
    return (DB.boards = DB.boards.filter(board => board.id !== id));
  }

  if (val === 'tasks') {
    return (DB.tasks = DB.tasks.filter(task => task.id !== id));
  }
};

module.exports = {
  getAll,
  getAllTasks,
  get,
  getTask,
  create,
  update,
  updateTask,
  remove
};
