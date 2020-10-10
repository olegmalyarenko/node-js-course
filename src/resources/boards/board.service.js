const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

/* const get = id => usersRepo.get(id);

const create = user => usersRepo.create(user);

const update = (user, id) => usersRepo.update(user, id);

const remove = id => usersRepo.remove(id);*/

module.exports = { getAll };
