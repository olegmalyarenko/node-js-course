const boardsRepo = require('./board.memory.repository');

const getAll = val => boardsRepo.getAll(val);

const get = (id, val) => boardsRepo.get(id, val);

/* const create = user => usersRepo.create(user);

const update = (user, id) => usersRepo.update(user, id);

const remove = id => usersRepo.remove(id);*/

module.exports = { getAll, get };
