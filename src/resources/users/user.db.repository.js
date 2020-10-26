const User = require('./user.model.js');
const Task = require('../tasks/task.model.js');

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
  // User.updateMany()
};

const remove = async id => {
  await Task.updateMany({ userId: id }, { $set: { userId: null } });
  await User.findByIdAndDelete(id);

  return 'User successfully deleted';
};

module.exports = { getAll, get, create, update, remove };
