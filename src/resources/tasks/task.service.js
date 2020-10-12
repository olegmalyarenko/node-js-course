const tasksRepo = require('./task.memory.repository');

const getAll = id => tasksRepo.getAll(id);

const get = (boardId, taskId) => tasksRepo.get(boardId, taskId);

const create = (item, val) => tasksRepo.create(item, val);

const update = (item, id, taskId) => tasksRepo.update(item, id, taskId);

const remove = (id, val) => tasksRepo.remove(id, val);

module.exports = { getAll, get, create, update, remove };