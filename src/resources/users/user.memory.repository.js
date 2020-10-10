const DB = require('../../common/inMemoryDB.js');

const getAll = async val => DB.getAll(val);

const get = async (id, val) => {
  const user = await DB.get(id, val);

  if (!user) {
    throw new Error(`The user with id: ${id} was not found`);
  }

  return user;
};

const create = async user => DB.createUser(user);

const update = async (user, id) => DB.updateUser(user, id);

const remove = async id => DB.removeUser(id);

module.exports = { getAll, get, create, update, remove };
