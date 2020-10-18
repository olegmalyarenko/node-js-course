const boardsRepo = require('./board.memory.repository');
const { schemaId, schemaBoard } = require('./board.validation.js');

const getAll = val => {
  try {
    return boardsRepo.getAll(val);
  } catch (err) {
    throw new Error('Boards list are invalid');
  }
};

const get = (id, val) => {
  try {
    schemaId.validateAsync(id);
    return boardsRepo.get(id, val);
  } catch (err) {
    throw new Error('Board is invalid');
  }
};

const create = (item, val) => {
  try {
    schemaBoard.validateAsync(item);
    return boardsRepo.create(item, val);
  } catch (err) {
    throw new Error('Board is invalid');
  }
};
const update = (item, id, val) => {
  try {
    schemaBoard.validateAsync(item);
    schemaId.validateAsync(id);
    return boardsRepo.update(item, id, val);
  } catch (err) {
    throw new Error('Board is invalid');
  }
};
const remove = (id, val) => {
  try {
    schemaId.validateAsync(id);
    return boardsRepo.remove(id, val);
  } catch (err) {
    throw new Error('Board is invalid');
  }
};

module.exports = { getAll, get, create, update, remove };
