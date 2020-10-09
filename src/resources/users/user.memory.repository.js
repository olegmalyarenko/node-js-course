const DB = require('../../common/inMemoryDB.js');

const getAll = async () => DB.getAllUsers();

const get = async id => {
  const user = await DB.getUser(id);

  if (!user) {
    throw new Error(`The user with id: ${id} was not found`);
  }

  return user;
};

const create = async user => DB.createUser(user);

const update = async (user, id) => DB.updateUser(user, id);

const remove = async id => DB.removeUser(id);

module.exports = { getAll, get, create, update, remove };
