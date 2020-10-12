const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model.js');
const tasksService = require('./task.service.js');

const val = 'tasks';

router.route('/').get(async (req, res) => {
  // console.log(req.params.id);
  const tasks = await tasksService.getAll(req.params.id);
  res.json(tasks.map(Task.toResponse));
});

router.route('/:taskId').get(async (req, res) => {
  try {
    const task = await tasksService.get(req.params.id, req.params.taskId);

    res.status(200).json(Task.toResponse(task));
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.route('/').post(async (req, res) => {
  const task = await tasksService.create(
    new Task({ ...req.body, boardId: req.params.id }),
    val
  );

  res.json(Task.toResponse(task));
});

router.route('/:taskId').put(async (req, res) => {
  console.log('taskID', req.params.taskId);
  const task = await tasksService.update(
    req.body,
    req.params.id,
    req.params.taskId
  );
  console.log('New task', task);
  res.status(200).json(Task.toResponse(task));
});

router.route('/:taskId').delete(async (req, res) => {
  try {
    const tasks = await tasksService.remove(req.params.taskId, val);
    res.status(200).json(tasks.map(Task.toResponse));
  } catch (e) {
    res.status(404).send(e.message);
  }
});
module.exports = router;
