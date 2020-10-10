const DB = require('../../common/inMemoryDB.js');

const getAll = async val => DB.getAll(val);

const get = async (id, val) => {
  const user = await DB.get(id, val);

  if (!user) {
    throw new Error(`The user with id: ${id} was not found`);
  }

  return user;
};

const create = async (item, val) => DB.create(item, val);

const update = async (item, id, val) => DB.update(item, id, val);

const remove = async (id, val) => DB.remove(id, val);

module.exports = { getAll, get, create, update, remove };
