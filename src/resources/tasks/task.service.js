const tasksRepo = require('./task.memory.repository');
const { schemaId, schemaTask } = require('./task.validation.js');

const getAll = id => {
  try {
    schemaId.validateAsync(id);
    return tasksRepo.getAll(id);
  } catch (err) {
    throw new Error('Task list are invalid');
  }
};

const get = (boardId, taskId) => {
  try {
    schemaId.validateAsync(boardId);
    schemaId.validateAsync(taskId);
    return tasksRepo.get(boardId, taskId);
  } catch (err) {
    throw new Error('Task is invalid');
  }
};

const create = (item, val) => {
  try {
    schemaTask.validateAsync(item);
    return tasksRepo.create(item, val);
  } catch (err) {
    throw new Error('Task is invalid');
  }
};

const update = (item, id, taskId) => {
  try {
    schemaTask.validateAsync(item);
    schemaId.validateAsync(id);
    return tasksRepo.update(item, id, taskId);
  } catch (err) {
    throw new Error('Task is invalid');
  }
};

const remove = (id, val) => {
  try {
    schemaId.validateAsync(id);
    return tasksRepo.remove(id, val);
  } catch (err) {
    throw new Error('Task is invalid');
  }
};

module.exports = { getAll, get, create, update, remove };
