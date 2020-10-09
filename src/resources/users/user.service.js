const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const get = id => usersRepo.get(id);

const create = user => usersRepo.create(user);

const update = (user, id) => usersRepo.update(user, id);

module.exports = { getAll, get, create, update };
