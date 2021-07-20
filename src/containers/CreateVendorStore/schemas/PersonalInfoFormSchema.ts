// EXTERNAL IMPORTS
import Joi from 'joi';

export const PersonalInfoFormSchema = Joi.object().keys({
  first_name: Joi.string().alphanum().min(2).max(30).empty().required().messages({
    'string.alphanum': 'First name must be alpanumeric.',
    'string.min': 'First name length must be 2 or greater.',
    'string.max': 'First name length must be 30 or less.',
    'string.empty': 'First name cannot be empty.',
    'any.required': 'First name is required.'
  }),
  last_name: Joi.string().alphanum().min(2).max(30).empty().required().messages({
    'string.alphanum': 'Last name must be alpanumeric.',
    'string.min': 'Last name length must be 2 or greater.',
    'string.max': 'Last name length must be 30 or less.',
    'string.empty': 'Last name cannot be empty.',
    'any.required': 'Last name is required.'
  }),
  month: Joi.string().empty().required().messages({
    'string.empty': 'Month is required.',
  }),
  date: Joi.string().empty().required().messages({
    'string.empty': 'Date is required'
  }),
  year: Joi.string().empty().required().messages({
    'string.empty': 'Year is required'
  }),
  address1: Joi.string().max(100).empty().required().messages({
    'string.max': 'Address length must be 100 or less.',
    'string.empty': 'Address cannot be empty.',
    'any.required': 'Address is required.'
  }),
  address2: Joi.string().optional().allow('').max(100).messages({
    'string.max': 'Address length must be 100 or less.'
  }),
  province: Joi.string().optional().allow('').max(100).alphanum().messages({
    'string.alphanum': 'Province must be alpanumeric.',
    'string.max': 'Province length must be 100 or less.',
  }),
  city: Joi.string().alphanum().max(100).required().messages({
    'string.alphanum': 'City must be alpanumeric.',
    'string.max': 'Address length must be 100 or less.',
    'string.empty': 'City cannot be empty.',
    'any.required': 'City is required'
  }),
  country: Joi.string().empty().required().messages({
    'any.required': 'Country is required'
  }),
  postal_code: Joi.string()
    .max(100)
    .required()
    .pattern(new RegExp(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/))
    .messages({
      'string.pattern.base': 'Postal code is not valid.',
      'string.empty': 'Postal code cannot be empty.',
      'any.required': 'Postal code is required'
    })
});
