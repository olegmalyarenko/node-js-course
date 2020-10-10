const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model.js');
const tasksService = require('./task.service.js');

router.route('/').get(async (req, res) => {
  console.log(req.params.id);
  const tasks = await tasksService.getAll(req.params.id);
  res.json(tasks.map(Task.toResponse));
});

/* router.route('/:id').get(async (req, res) => {
  try {
    const task = await tasksService.get(req.params.id, val);

    res.status(200).json(Task.toResponse(task));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/').post(async (req, res) => {
  const task = await tasksService.create(
    new Task({
      title: req.body.title,
      columns: [...req.body.columns]
    }),
    val
  );

  res.json(Task.toResponse(task));
});

router.route('/:id').put(async (req, res) => {
  const task = await tasksService.update(req.body, req.params.id, val);
  console.log('New task', task);
  res.status(200).json(Task.toResponse(task));
});

router.route('/:id').delete(async (req, res) => {
  try {
    const tasks = await tasksService.remove(req.params.id, val);
    res.status(200).json(tasks.map(Task.toResponse));
  } catch (e) {
    res.status(404).send(e.message);
  }
});*/
module.exports = router;
