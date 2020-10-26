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

const update = item => {
  return usersDBRepo.update(item);
};
const remove = id => {
  return usersDBRepo.remove(id);
};

module.exports = { getAll, get, create, update, remove };
