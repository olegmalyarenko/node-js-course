const User = require('../resources/users/user.model.js');
const Board = require('../resources/boards/board.model.js');
const DB = {
  users: [],
  boards: [],
  tasks: []
};

for (let i = 0; i < 6; i++) {
  DB.users.push(new User());
  DB.boards.push(new Board());
}

// console.log('DB', DB);

const getAll = async val => {
  if (val === 'users') {
    return DB.users.slice(0);
  }
  if (val === 'boards') {
    return DB.boards.slice(0);
  }
};
// const getAllBoards = async () => DB.boards.slice(0);

const get = async (id, val) => {
  if (val === 'users') {
    return DB.users.filter(el => el.id === id)[0];
  }

  if (val === 'boards') {
    return DB.boards.filter(el => el.id === id)[0];
  }
};
// const getBoard = async id => DB.boards.filter(el => el.id === id)[0];

const create = async (item, val) => {
  if (val === 'boards') {
    DB.boards.push(item);
    return item;
  }

  if (val === 'users') {
    DB.users.push(item);
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

const removeUser = async id => {
  const currentIndex = DB.users.findIndex(el => el.id === id);
  return DB.users.splice(currentIndex, 1);
};

module.exports = {
  getAll,
  get,
  create,
  update,
  removeUser
};
