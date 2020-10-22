const User = require('./user.model.js');

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

module.exports = { getAll, get, create };
