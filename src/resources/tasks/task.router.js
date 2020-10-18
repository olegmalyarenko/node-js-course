const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model.js');
const tasksService = require('./task.service.js');

const val = 'tasks';

router.route('/').get(async (req, res, next) => {
  try {
    const tasks = await tasksService.getAll(req.params.id);
    res.json(tasks.map(Task.toResponse));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

router.route('/:taskId').get(async (req, res, next) => {
  try {
    const task = await tasksService.get(req.params.id, req.params.taskId);

    res.status(200).json(Task.toResponse(task));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const task = await tasksService.create(
      new Task({ ...req.body, boardId: req.params.id }),
      val
    );

    res.json(Task.toResponse(task));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

router.route('/:taskId').put(async (req, res, next) => {
  try {
    const task = await tasksService.update(
      req.body,
      req.params.id,
      req.params.taskId
    );
    res.status(200).json(Task.toResponse(task));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

router.route('/:taskId').delete(async (req, res, next) => {
  try {
    const tasks = await tasksService.remove(req.params.taskId, val);
    res.status(200).json(tasks.map(Task.toResponse));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});
module.exports = router;
