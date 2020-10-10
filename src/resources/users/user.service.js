const usersRepo = require('./user.memory.repository');

const getAll = val => usersRepo.getAll(val);

const get = (id, val) => usersRepo.get(id, val);

const create = (item, val) => usersRepo.create(item, val);

const update = (item, id, val) => usersRepo.update(item, id, val);

const remove = id => usersRepo.remove(id);

module.exports = { getAll, get, create, update, remove };
