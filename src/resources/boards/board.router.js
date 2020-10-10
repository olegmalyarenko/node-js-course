const router = require('express').Router();
const Board = require('./board.model.js');
const boardsService = require('./board.service.js');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  console.log('BOARDS', boards);
  // map user fields to exclude secret fields like "password"
  res.json(boards.map(Board.toResponse));
});

/* router.route('/:id').get(async (req, res) => {
  try {
    const user = await usersService.get(req.params.id);

    res.status(200).json(User.toResponse(user));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(
    new User({
      login: req.body.login,
      password: req.body.password,
      name: req.body.name
    })
  );

  res.json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  try {
    const user = await usersService.update(req.body, req.params.id);
    console.log('Нью юзерс', user);
    res.status(200).json(User.toResponse(user));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    const users = await usersService.remove(req.params.id);
    res.status(200).json(users.map(User.toResponse));
  } catch (e) {
    res.status(404).send(e.message);
  }
});*/
module.exports = router;
