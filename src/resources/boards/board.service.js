const boardsRepo = require('./board.memory.repository');

const getAll = val => {
  try {
    return boardsRepo.getAll(val);
  } catch (err) {
    throw new Error('Boards list are invalid');
  }
};

const get = (id, val) => {
  return boardsRepo.get(id, val);
};

const create = (item, val) => {
  try {
    return boardsRepo.create(item, val);
  } catch (err) {
    throw new Error('Board is invalid');
  }
};
const update = (item, id, val) => {
  try {
    return boardsRepo.update(item, id, val);
  } catch (err) {
    throw new Error('Board is invalid');
  }
};
const remove = (id, val) => {
  return boardsRepo.remove(id, val);
};

module.exports = { getAll, get, create, update, remove };
