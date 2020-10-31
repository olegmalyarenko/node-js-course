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
  await Task.findOneAndDelete({ _id: taskId, boardId });
  return 'Task has been successfully deleted';
};

const removeUsers = async id => {
  return await Task.updateMany({ userId: id }, { $set: { userId: null } });
};

const removeTasks = async id => {
  return await Task.deleteMany({ boardId: id });
};

module.exports = {
  getAll,
  get,
  create,
  update,
  remove,
  removeUsers,
  removeTasks
};
