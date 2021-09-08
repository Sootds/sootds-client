// EXTERNAL IMPORTS
import Joi from 'joi';

export const PersonalInfoFormSchema = Joi.object().keys({
  name: Joi.string().min(2).max(30).empty().required().messages({
    'string.min': 'Name length must be 2 or greater.',
    'string.max': 'Name length must be 30 or less.',
    'string.empty': 'Name cannot be empty.',
    'any.required': 'Name is required.'
  }),
  month: Joi.string().empty().required().messages({
    'string.empty': 'Month is required.'
  }),
  day: Joi.string().empty().required().messages({
    'string.empty': 'Day is required.'
  }),
  year: Joi.string().empty().required().messages({
    'string.empty': 'Year is required.'
  }),
  address: Joi.string().max(100).empty().required().messages({
    'string.max': 'Address length must be 100 or less.',
    'string.empty': 'Address cannot be empty.',
    'any.required': 'Address is required.'
  }),
  state: Joi.string().optional().allow('').max(100).alphanum().messages({
    'string.alphanum': 'Province/state must be alpanumeric.',
    'string.max': 'Province/state length must be 100 or less.'
  }),
  city: Joi.string().alphanum().max(100).required().messages({
    'string.alphanum': 'City must be alpanumeric.',
    'string.max': 'Address length must be 100 or less.',
    'string.empty': 'City cannot be empty.',
    'any.required': 'City is required.'
  }),
  country: Joi.string().empty().required().messages({
    'any.required': 'Country is required.'
  }),
  code: Joi.string()
    .max(100)
    .required()
    .pattern(new RegExp(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/))
    .messages({
      'string.pattern.base': 'Postal code is not valid.',
      'string.empty': 'Postal code cannot be empty.',
      'any.required': 'Postal code is required.'
    })
});
