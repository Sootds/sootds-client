// EXTERNAL IMPORTS
import Joi from 'joi';

export const UserInfoFormSchema = Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(30).empty().required().messages({
    'string.alphanum': 'Username must be alpanumeric.',
    'string.min': 'Username length must be 3 or greater.',
    'string.max': 'Username length must be 30 or less.',
    'string.empty': 'Username cannot be empty.',
    'any.required': 'Username is required.'
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .empty()
    .required()
    .messages({
      'string.email': 'Email must be a valid email.',
      'string.empty': 'Email cannot be empty.',
      'any.required': 'Email is required.'
    }),
  name: Joi.string().min(3).max(60).empty().required().messages({
    'string.min': 'Name length must be 3 or greater.',
    'string.max': 'Name length must be 60 or less.',
    'string.empty': 'Name cannot be empty.',
    'any.required': 'Name is required.'
  }),
  address: Joi.object().keys({
    name: Joi.string().empty().required().messages({
      'any.required': 'Address name is required.',
      'string.empty': 'Address name cannot be empty.'
    }),
    city: Joi.string().empty().required().messages({
      'any.required': 'Address city is required.',
      'string.empty': 'Address city cannot be empty.'
    }),
    state: Joi.string().empty().required().messages({
      'any.required': 'Address state is required.',
      'string.empty': 'Address state cannot be empty.'
    }),
    code: Joi.string().empty().required().messages({
      'any.required': 'Address code is required.',
      'string.empty': 'Address code cannot be empty.'
    }),
    countryId: Joi.number().min(1).required().messages({
      'any.required': 'Address country ID is required.',
      'number.min': 'Address country ID cannot be less than 1.'
    })
  })
});
