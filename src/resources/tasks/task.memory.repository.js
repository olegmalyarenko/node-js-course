const DB = require('../../common/inMemoryDB.js');

const getAll = async val => DB.getAll(val);

const get = async (id, val) => {
  const task = await DB.get(id, val);

  if (!task) {
    throw new Error(`The task with id: ${id} was not found`);
  }

  return task;
};

const create = async (item, val) => DB.create(item, val);

const update = async (item, id, val) => DB.update(item, id, val);

const remove = async (id, val) => DB.remove(id, val);

module.exports = { getAll, get, create, update, remove };
