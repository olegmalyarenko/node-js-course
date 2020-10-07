const User = require('../resources/users/user.model.js');

const DB = [];

DB.push(new User(), new User(), new User(), new User());

module.exports = DB;
