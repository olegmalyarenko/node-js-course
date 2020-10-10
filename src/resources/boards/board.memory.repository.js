const DB = require('../../common/inMemoryDB.js');

const getAll = async val => DB.getAll(val);

const get = async (id, val) => {
  const board = await DB.get(id, val);

  if (!board) {
    throw new Error(`The board with id: ${id} was not found`);
  }

  return board;
};

const create = async (item, val) => DB.create(item, val);

const update = async (item, id, val) => DB.update(item, id, val);
/*
const remove = async id => DB.removeUser(id);*/

module.exports = { getAll, get, create, update };
