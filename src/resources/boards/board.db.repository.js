const Board = require('./board.model.js');
const taskService = require('../tasks/task.service.js');

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
  await Board.findByIdAndDelete(id);
  await taskService.removeTasks(id);

  return 'Board has been successfully deleted';
};

module.exports = { getAll, get, create, update, remove };
