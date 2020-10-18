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

const update = async (item, id, taskId) => DB.updateTask(item, id, taskId);

const remove = async (id, val) => {
  const removeTask = DB.remove(id, val);

  if (!removeTask) {
    throw new Error(`The task with id: ${id} was not found`);
  }
  return removeTask;
};

module.exports = { getAll, get, create, update, remove };
