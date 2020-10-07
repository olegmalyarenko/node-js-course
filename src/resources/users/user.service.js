const usersRepo = require('./user.memory.repository');

const getAll = async () => {
  return usersRepo.getAll();
};

module.exports = { getAll };
