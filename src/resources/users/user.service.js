const usersRepo = require('./user.memory.repository');
const { schemaId, schemaUser } = require('./user.validation');

const getAll = val => {
  try {
    return usersRepo.getAll(val);
  } catch (err) {
    throw new Error('Users list are invalid');
  }
};

const get = (id, val) => {
  try {
    schemaId.validateAsync(id);

    return usersRepo.get(id, val);
  } catch (err) {
    throw new Error('User is invalid');
  }
};

const create = (item, val) => {
  try {
    schemaUser.validateAsync(item);

    return usersRepo.create(item, val);
  } catch (err) {
    throw new Error('User is invalid');
  }
};

const update = (item, id, val) => {
  try {
    schemaUser.validateAsync(item);
    schemaId.validateAsync(id);
    return usersRepo.update(item, id, val);
  } catch (err) {
    throw new Error('User is invalid');
  }
};
const remove = (id, val) => {
  try {
    schemaId.validateAsync(id);
    return usersRepo.remove(id, val);
  } catch (err) {
    throw new Error('User is not found');
  }
};

module.exports = { getAll, get, create, update, remove };
