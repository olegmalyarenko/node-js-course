const usersRepo = require('./user.memory.repository');

const getAll = val => {
  try {
    return usersRepo.getAll(val);
  } catch (err) {
    throw new Error('Users list are invalid');
  }
};

const get = (id, val) => {
  return usersRepo.get(id, val);
};

const create = (item, val) => {
  try {
    return usersRepo.create(item, val);
  } catch (err) {
    throw new Error('User is invalid');
  }
};

const update = (item, id, val) => {
  try {
    return usersRepo.update(item, id, val);
  } catch (err) {
    throw new Error('User is invalid');
  }
};
const remove = (id, val) => {
  return usersRepo.remove(id, val);
};

module.exports = { getAll, get, create, update, remove };
