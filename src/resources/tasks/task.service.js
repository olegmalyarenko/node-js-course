const tasksRepo = require('./task.memory.repository');

const getAll = id => {
  try {
    return tasksRepo.getAll(id);
  } catch (err) {
    throw new Error('Task list are invalid');
  }
};

const get = (boardId, taskId) => {
  return tasksRepo.get(boardId, taskId);
};

const create = (item, val) => {
  try {
    return tasksRepo.create(item, val);
  } catch (err) {
    throw new Error('Task is invalid');
  }
};

const update = (item, taskId) => {
  try {
    return tasksRepo.update(item, taskId);
  } catch (err) {
    throw new Error('Task is invalid');
  }
};

const remove = (id, val) => {
  try {
    return tasksRepo.remove(id, val);
  } catch (err) {
    throw new Error('Task is invalid');
  }
};

module.exports = { getAll, get, create, update, remove };
