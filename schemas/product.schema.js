const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const description = Joi.string().min(10);
const categoryId = Joi.number().integer();


const image = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description:description.required(),
  image: image.required(),
  categoryId: categoryId.required(),

});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  description:description,
  image: image,
  categoryId
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
