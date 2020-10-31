const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (process.env.PATH_WHITELIST.includes(req.path)) return next();
  const authHeader = req.header('Authorization');

  if (authHeader !== undefined) {
    const tokenString = req.header('Authorization');
    const [type, token] = tokenString.split(' ');
    if (type !== 'Bearer') {
      res.status(401).send('Unauthorized user');
    } else {
      const result = jwt.verify(token, process.env.JWT_SECRET_KEY);
      console.log('RES', result);
      return next();
    }
  }
  res.status(401).send('Unauthorized user');
};
