const DB = require('../../common/inMemoryDB.js');

const getAll = async id => {
  return await DB.getAllTasks(id);
};

const get = async (boardId, taskId) => {
  const task = await DB.getTask(boardId, taskId);
  if (!task) {
    throw new Error(`The task with id: ${taskId} was not found`);
  }
  return task;
};

const create = async (item, val) => DB.create(item, val);

const update = async (item, taskId) => DB.updateTask(item, taskId);

const remove = async (id, val) => {
  return DB.remove(id, val);
};

module.exports = { getAll, get, create, update, remove };
