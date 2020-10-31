const router = require('express').Router();
const loginService = require('./login.service.js');

router.route('/').post(async (req, res, next) => {
  try {
    const password = req.body.password;
    const login = req.body.login;
    const result = await loginService.check(login, password);
    if (!result) {
      res.status(403).send('Incorrect login or password');
    } else {
      res.status(200).json({
        token: result
      });
    }
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
