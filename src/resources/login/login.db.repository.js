// const { token } = require('morgan');
const User = require('../users/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const check = async (login, password) => {
  const user = await User.findOne({ login });

  const createToken = bcrypt.compare(password, user.password).then(result => {
    if (result) {
      const token = jwt.sign(
        { login: user.login, userId: user.id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '1h' }
      );
      return token;
    }
    return false;
  });
  console.log('TOKEN2', createToken);
  return createToken;
};
module.exports = { check };
