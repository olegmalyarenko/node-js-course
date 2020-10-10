const tasksRepo = require('./task.memory.repository');

const getAll = id => tasksRepo.getAll(id);

/* const get = (id, val) => tasksRepo.get(id, val);

const create = (item, val) => tasksRepo.create(item, val);

const update = (item, id, val) => tasksRepo.update(item, id, val);

const remove = (id, val) => tasksRepo.remove(id, val);*/

module.exports = { getAll };
