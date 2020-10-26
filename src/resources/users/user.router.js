const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
// const { schemaId, schemaUser } = require('./user.validation');

// const val = 'users';

router.route('/').get(async (req, res, next) => {
  try {
    const users = await usersService.getAll();
    // map user fields to exclude secret fields like "password"
    res.json(users.map(User.toResponse));
  } catch (err) {
    // res.status(404).send(err.message);
    return next(err);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    // schemaId.validateAsync(req.params.id);
    const user = await usersService.get(req.params.id);
    if (user) res.status(200).send(User.toResponse(user));
    else {
      const err = new Error('Not Found');
      err.status = 404;
      return next(err);
    }
  } catch (err) {
    return next(err);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const item = new User({ ...req.body });
    // schemaUser.validateAsync(item);
    const user = await usersService.create(item);
    res.json(User.toResponse(user));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const item = new User({
      ...req.body,
      _id: req.params.id
    });
    // schemaUser.validateAsync(item);
    // schemaId.validateAsync(req.params.id);
    const user = await usersService.update(item);
    if (user) res.status(200).send(User.toResponse(user));
    else {
      const err = new Error('Not Found');
      err.status = 404;
      return next(err);
    }
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    // schemaId.validateAsync(req.params.id);
    const result = await usersService.remove(req.params.id);
    if (result) res.status(204).send(result);
    else {
      const err = new Error('Not Found');
      err.status = 404;
      return next(err);
    }
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
