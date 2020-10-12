const DB = require('../../common/inMemoryDB.js');

const getAll = async id => DB.getAllTasks(id);

const get = async (boardId, taskId) => {
  return await DB.getTask(boardId, taskId);
};

const create = async (item, val) => DB.create(item, val);

const update = async (item, id, taskId) => DB.updateTask(item, id, taskId);

const remove = async (id, val) => DB.remove(id, val);

module.exports = { getAll, get, create, update, remove };