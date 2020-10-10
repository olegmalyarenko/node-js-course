const boardsRepo = require('./board.memory.repository');

const getAll = val => boardsRepo.getAll(val);

const get = (id, val) => boardsRepo.get(id, val);

const create = (item, val) => boardsRepo.create(item, val);

const update = (item, id, val) => boardsRepo.update(item, id, val);

const remove = (id, val) => boardsRepo.remove(id, val);

module.exports = { getAll, get, create, update, remove };
