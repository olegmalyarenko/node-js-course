const router = require('express').Router();
const Board = require('./board.model.js');
const boardsService = require('./board.service.js');

const val = 'boards';

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll(val);
  res.json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  try {
    const board = await boardsService.get(req.params.id, val);

    res.status(200).json(Board.toResponse(board));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.create(
    new Board({
      title: req.body.title,
      columns: [...req.body.columns]
    }),
    val
  );

  res.json(Board.toResponse(board));
});
/*
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
