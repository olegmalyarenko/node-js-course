const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model.js');
const tasksService = require('./task.service.js');
// const { schemaId, schemaTask } = require('./task.validation.js');

router.route('/').get(async (req, res, next) => {
  try {
    // schemaId.validateAsync(req.params.id);
    const tasks = await tasksService.getAll(req.params.id);
    if (tasks) res.json(tasks.map(Task.toResponse));
    else {
      const err = new Error('Not Found');
      err.status = 404;
      return next(err);
    }
  } catch (err) {
    return next(err);
  }
});

router.route('/:taskId').get(async (req, res, next) => {
  try {
    // schemaId.validateAsync(req.params.id);
    // schemaId.validateAsync(req.params.taskId);
    const task = await tasksService.get(req.params.id, req.params.taskId);
    if (task) res.status(200).send(Task.toResponse(task));
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
    const item = new Task({ ...req.body, boardId: req.params.id });
    // schemaTask.validateAsync(item);
    const task = await tasksService.create(item);

    res.json(Task.toResponse(task));
  } catch (err) {
    res.status(404).send(err.message);
    return next(err);
  }
});

router.route('/:taskId').put(async (req, res, next) => {
  try {
    const item = new Task({
      ...req.body,
      _id: req.params.taskId,
      boardId: req.params.id
    });
    // schemaTask.validateAsync(item);
    // schemaId.validateAsync(req.params.taskId);
    // schemaId.validateAsync(req.params.id);
    const task = await tasksService.update(
      item,
      req.params.taskId,
      req.params.id
    );
    if (task) res.status(200).send(Task.toResponse(task));
    else {
      const err = new Error('Not Found');
      err.status = 404;
      return next(err);
    }
  } catch (err) {
    return next(err);
  }
});

router.route('/:taskId').delete(async (req, res, next) => {
  try {
    // schemaId.validateAsync(req.params.taskId);
    const result = await tasksService.remove(req.params.taskId, req.params.id);
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
