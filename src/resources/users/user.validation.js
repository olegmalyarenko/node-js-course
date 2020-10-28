const Joi = require('joi');

const schemaId = Joi.string()
  .min(3)
  .max(40)
  .required();

const schemaUser = Joi.object({
  id: Joi.string(),
  name: Joi.string()
    .min(3)
    .max(20)
    .alphanum()
    .required(),
  login: Joi.string()
    .min(3)
    .max(20)
    .alphanum()
    .required(),
  password: Joi.string()
    .min(3)
    .required()
});

module.exports = {
  schemaId,
  schemaUser
};
