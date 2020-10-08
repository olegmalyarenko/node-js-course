const User = require('../resources/users/user.model.js');

const DB = [];

DB.push(new User(), new User(), new User(), new User());

const getAllUsers = async () => DB.slice(0);

const getUser = async id => DB.filter(el => el.id === id)[0];

const createUser = async user => {
  DB.push(user);
  return user;
};

module.exports = { getAllUsers, getUser, createUser };
