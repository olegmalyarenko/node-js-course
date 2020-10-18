const Joi = require('joi');

const schemaId = Joi.string()
  .min(3)
  .max(40)
  .required();

const schemaTask = Joi.object({
  id: Joi.string()
    .min(3)
    .max(40)
    .required(),
  title: Joi.string()
    .min(3)
    .max(20)
    .alphanum()
    .required(),
  order: Joi.number(),
  description: Joi.string()
    .min(3)
    .max(100)
    .required(),
  userId: Joi.string()
    .min(3)
    .max(40)
    .required(),
  boardId: Joi.string()
    .min(3)
    .max(40)
    .required(),
  columnId: Joi.string()
    .min(3)
    .max(40)
    .required()
});

module.exports = {
  schemaId,
  schemaTask
};
