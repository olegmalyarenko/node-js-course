const loginDBRepo = require('./login.db.repository');
const check = (login, password) => {
  return loginDBRepo.check(login, password);
};
module.exports = { check };
