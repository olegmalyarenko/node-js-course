const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
// const { schemaId, schemaUser } = require('./user.validation');

const val = 'users';

router.route('/').get(async (req, res, next) => {
  try {
    const users = await usersService.getAll();
    // map user fields to exclude secret fields like "password"
    res.json(users.map(User.toResponse));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    // schemaId.validateAsync(req.params.id);
    const user = await usersService.get(req.params.id);
    res.status(200).json(User.toResponse(user));
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
    const item = req.body;
    // schemaUser.validateAsync(item);
    // schemaId.validateAsync(req.params.id);
    const user = await usersService.update(item, req.params.id, val);
    res.status(200).json(User.toResponse(user));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    // schemaId.validateAsync(req.params.id);
    const users = await usersService.remove(req.params.id, val);
    res.status(200).json(users.map(User.toResponse));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

module.exports = router;
