const Task = require('./task.model.js');

const getAll = async id => {
  return await Task.find({ boardId: id });
};

const get = async (boardId, taskId) => {
  return await Task.findOne({ _id: taskId, boardId });
};

const create = async item => {
  return Task.create(item);
};

const update = async (item, taskId, boardId) => {
  return Task.findOneAndUpdate({ _id: taskId, boardId }, item);
};

const remove = async (taskId, boardId) => {
  const task = (await Task.deleteOne({ _id: taskId, boardId })).deletedCount;
  if (task === 1) {
    return getAll();
  }
  throw new Error('Task is not found');
};

module.exports = { getAll, get, create, update, remove };
