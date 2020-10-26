// const tasksRepo = require('./task.memory.repository');
const tasksDBRepo = require('./task.db.repository');

const getAll = id => {
  return tasksDBRepo.getAll(id);
};

const get = (boardId, taskId) => {
  return tasksDBRepo.get(boardId, taskId);
};

const create = item => {
  return tasksDBRepo.create(item);
};

const update = (item, taskId, boardId) => {
  return tasksDBRepo.update(item, taskId, boardId);
};

const remove = (taskId, boardId) => {
  return tasksDBRepo.remove(taskId, boardId);
};

module.exports = { getAll, get, create, update, remove };
