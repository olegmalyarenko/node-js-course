const Joi = require('joi');

const schemaId = Joi.string()
  .min(3)
  .max(40)
  .required();

const schemaBoard = Joi.object({
  id: Joi.string()
    .min(3)
    .max(40),
  title: Joi.string()
    .min(3)
    .max(20)
    .alphanum()
    .required(),
  columns: Joi.array()
    .items(
      Joi.object({
        id: Joi.string()
          .min(3)
          .max(40),
        title: Joi.string()
          .min(3)
          .max(20)
          .alphanum()
          .required(),
        order: Joi.number()
      })
    )
    .has(
      Joi.object({ id: Joi.string(), title: Joi.string(), order: Joi.number() })
    )
});

module.exports = {
  schemaId,
  schemaBoard
};
