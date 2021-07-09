// EXTERNAL IMPORTS
import Joi from 'joi';

export const SignInFormSchema = Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(30).empty().required().messages({
    'string.alphanum': 'Username must be alpanumeric.',
    'string.min': 'Username length must be 3 or greater.',
    'string.max': 'Username length must be 30 or less.',
    'string.empty': 'Username cannot be empty.',
    'any.required': 'Username is required.'
  }),
  password: Joi.string().empty().required().messages({
    'string.empty': 'Password cannot be empty.',
    'any.required': 'Password is required.'
  })
});
