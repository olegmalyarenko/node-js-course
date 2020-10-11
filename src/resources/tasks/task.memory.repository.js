const DB = require('../../common/inMemoryDB.js');

const getAll = async id => DB.getAllTasks(id);

const get = async (boardId, id) => {
  return await DB.getTask(boardId, id);
};

const create = async (item, val) => DB.create(item, val);
/*
const update = async (item, id, val) => DB.update(item, id, val);

const remove = async (id, val) => DB.remove(id, val);*/

module.exports = { getAll, get, create };
