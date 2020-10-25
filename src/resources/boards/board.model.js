const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* class Board {
  constructor({
    id = uuid(),
    title = 'TITLE',
    columns = [
      {
        id: 'string',
        title: 'string',
        order: 0
      }
    ]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}*/

const boardsSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuid
    },
    title: String,
    columns: [
      {
        title: String,
        order: Number
      }
    ]
  },
  { versionKey: false }
);

boardsSchema.statics.toResponse = board => {
  const { id, title, columns } = board;
  return { id, title, columns };
};

const Board = mongoose.model('Board', boardsSchema);

module.exports = Board;
