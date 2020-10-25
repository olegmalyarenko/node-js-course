const router = require('express').Router();
const Board = require('./board.model.js');
const boardsService = require('./board.service.js');
// const { schemaId, schemaBoard } = require('./board.validation.js');

router.route('/').get(async (req, res, next) => {
  try {
    const boards = await boardsService.getAll();
    return res.json(boards.map(Board.toResponse));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    // schemaId.validateAsync(req.params.id);
    const board = await boardsService.get(req.params.id);
    return res.status(200).json(Board.toResponse(board));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const item = new Board({
      title: req.body.title,
      columns: [...req.body.columns]
    });
    // schemaBoard.validateAsync(item);
    const board = await boardsService.create(item);
    return res.json(Board.toResponse(board));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const item = new Board({ ...req.body, _id: req.params.id });
    // schemaBoard.validateAsync(item);
    // schemaId.validateAsync(req.params.id);
    const board = await boardsService.update(item);
    return res.status(200).json(Board.toResponse(board));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    // schemaId.validateAsync(req.params.id);
    const boards = await boardsService.remove(req.params.id);
    return res.status(200).json(boards.map(Board.toResponse));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});
module.exports = router;
