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

console.log('DB', DB);

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

const createUser = async user => {
  DB.users.push(user);
  return user;
};

const updateUser = async (user, id) => {
  const currentIndex = DB.users.findIndex(el => el.id === id);
  const newUser = new User({
    id,
    login: user.login,
    password: user.password,
    name: user.name
  });
  DB.users.splice(currentIndex, 1, newUser);

  return newUser;
};

const removeUser = async id => {
  const currentIndex = DB.users.findIndex(el => el.id === id);
  return DB.users.splice(currentIndex, 1);
};

module.exports = {
  getAll,
  get,
  createUser,
  updateUser,
  removeUser
};
