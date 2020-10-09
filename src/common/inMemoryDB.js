const User = require('../resources/users/user.model.js');

const DB = [];

DB.push(new User(), new User(), new User(), new User());

const getAllUsers = async () => DB.slice(0);

const getUser = async id => DB.filter(el => el.id === id)[0];

const createUser = async user => {
  DB.push(user);
  return user;
};

const updateUser = async (user, id) => {
  const currentIndex = DB.findIndex(el => el.id === id);
  console.log(` currentIndex: ${currentIndex}`);
  // let currerntUser = DB.filter(el => el.id === id)[0];
  // console.log(` User: ${user.name}, ${user.login}, ${user.password}`);
  // console.log(` User: ${currerntUser}`);
  const newUser = new User({
    id,
    login: user.login,
    password: user.password,
    name: user.name
  });
  DB.splice(currentIndex, 1, newUser);

  return newUser;
};
module.exports = { getAllUsers, getUser, createUser, updateUser };
