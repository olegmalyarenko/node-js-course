const DB = require('../../common/inMemoryDB.js');

const getAll = async val => DB.getAll(val);

const get = async (id, val) => {
  const user = await DB.get(id, val);

  if (!user) {
    throw new Error(`The user with id: ${id} was not found`);
  }

  return user;
};

const create = async (item, val) => {
  return DB.create(item, val);
};

const update = async (item, id, val) => DB.update(item, id, val);

const remove = async (id, val) => {
  const checkUser = get(id, val);
  if (!checkUser) {
    throw new Error(`The user with id: ${id} was not found`);
  }

  const user = await DB.remove(id, val);

  return user;
};

module.exports = { getAll, get, create, update, remove };
