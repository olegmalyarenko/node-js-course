const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* class Task {
  constructor({
    id = uuid(),
    title = 'TITLE',
    order = 0,
    description = 'string',
    userId = 'string',
    boardId = 'string',
    columnId = 'string'
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}*/

const tasksSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuid
    },
    title: String,
    order: Number,
    description: String,
    userId: String,
    boardId: String,
    columnId: String
  },
  { versionKey: false }
);

tasksSchema.statics.toResponse = task => {
  const { id, title, order, description, userId, boardId, columnId } = task;
  return { id, title, order, description, userId, boardId, columnId };
};

const Task = mongoose.model('Task', tasksSchema);

module.exports = Task;
