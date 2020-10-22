// const usersRepo = require('./user.memory.repository');
const usersDBRepo = require('./user.db.repository.js');

const getAll = () => {
  return usersDBRepo.getAll();
};

const get = id => {
  return usersDBRepo.get(id);
};

const create = item => {
  return usersDBRepo.create(item);
};

/* const update = (item, id, val) => {
  throw new Error('Users list are invalid');
  /* try {
    return usersRepo.update(item, id, val);
  } catch (err) {
    throw new Error('User is invalid');
  }
};
const remove = (id, val) => {
  throw new Error('Users list are invalid');
  // return usersRepo.remove(id, val);
};*/

module.exports = { getAll, get, create };
