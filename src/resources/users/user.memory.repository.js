const DB = require('../../common/inMemoryDB.js');

const getAll = async () => DB.getAllUsers();

const get = async id => DB.getUser(id);

const create = async user => DB.createUser(user);

module.exports = { getAll, get, create };
