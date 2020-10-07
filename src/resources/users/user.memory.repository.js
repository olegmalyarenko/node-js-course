const DB = require('../../common/inMemoryDB.js');

const getAll = async () => DB;

const get = async id => DB.filter(el => el.id === id)[0];

module.exports = { getAll, get };
