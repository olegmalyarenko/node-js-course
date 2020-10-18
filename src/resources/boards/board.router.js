const router = require('express').Router();
const Board = require('./board.model.js');
const boardsService = require('./board.service.js');

const val = 'boards';

router.route('/').get(async (req, res, next) => {
  try {
    const boards = await boardsService.getAll(val);
    return res.json(boards.map(Board.toResponse));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const board = await boardsService.get(req.params.id, val);

    return res.status(200).json(Board.toResponse(board));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const board = await boardsService.create(
      new Board({
        title: req.body.title,
        columns: [...req.body.columns]
      }),
      val
    );

    return res.json(Board.toResponse(board));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const board = await boardsService.update(req.body, req.params.id, val);
    return res.status(200).json(Board.toResponse(board));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    const boards = await boardsService.remove(req.params.id, val);
    return res.status(200).json(boards.map(Board.toResponse));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});
module.exports = router;
