// const boardsRepo = require('./board.memory.repository');
const boardsDBRepo = require('./board.db.repository.js');

const getAll = () => {
  return boardsDBRepo.getAll();
};

const get = id => {
  return boardsDBRepo.get(id);
};

const create = item => {
  return boardsDBRepo.create(item);
};

const update = item => {
  return boardsDBRepo.update(item);
};
const remove = id => {
  return boardsDBRepo.remove(id);
};

module.exports = { getAll, get, create, update, remove };
