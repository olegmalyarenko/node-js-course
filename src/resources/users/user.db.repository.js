const User = require('./user.model.js');
const tasksService = require('../tasks/task.service.js');

const getAll = async () => {
  return await User.find({});
};

const get = async id => {
  return await User.findOne({ _id: id });
  // User.findById(id);
};

const create = async item => {
  return User.create(item);
};

const update = async item => {
  return User.findOneAndUpdate({ _id: item._id }, item);
};

const remove = async id => {
  await User.findByIdAndDelete(id);
  await tasksService.removeUsers(id);

  return 'User has been successfully deleted';
};

module.exports = { getAll, get, create, update, remove };
