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

const update = async item => {
  return User.findOneAndUpdate({ _id: item._id }, item);
  // User.updateMany()
};

const remove = async id => {
  const user = (await User.deleteOne({ _id: id })).deletedCount;
  console.info('User', user);

  if (user === 1) {
    return getAll();
  }
  throw new Error('User is not fined');
};

module.exports = { getAll, get, create, update, remove };
