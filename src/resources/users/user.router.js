const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

const val = 'users';

router.route('/').get(async (req, res, next) => {
  try {
    const users = await usersService.getAll(val);
    // map user fields to exclude secret fields like "password"
    res.json(users.map(User.toResponse));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const user = await usersService.get(req.params.id, val);
    res.status(200).json(User.toResponse(user));
  } catch (err) {
    return next(err);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const user = await usersService.create(new User({ ...req.body }), val);

    res.json(User.toResponse(user));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const user = await usersService.update(req.body, req.params.id, val);
    res.status(200).json(User.toResponse(user));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    const users = await usersService.remove(req.params.id, val);
    res.status(200).json(users.map(User.toResponse));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

module.exports = router;
