const Board = require('./board.model.js');
const Task = require('../tasks/task.model.js');

const getAll = async () => {
  return await Board.find({});
};

const get = async id => {
  return await Board.findOne({ _id: id });
};

const create = async item => {
  return Board.create(item);
};

const update = async item => {
  return Board.findOneAndUpdate({ _id: item._id }, item);
};

const remove = async id => {
  const board = (await Board.deleteOne({ _id: id })).deletedCount;
  if (board === 1) {
    // eslint-disable-next-line no-unused-expressions
    (await Task.deleteMany({ boardId: id })).deletedCount;
    return getAll();
  }
  throw new Error('Board is not found');
};

module.exports = { getAll, get, create, update, remove };
