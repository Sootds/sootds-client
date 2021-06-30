import Joi from 'joi';

export const SignUpFormSchema = Joi.object().keys({
  user_name: Joi.string().alphanum().min(3).max(30).empty().empty().required().messages({
    'string.alphanum': 'Username must be alpanumeric.',
    'string.min': 'Username length must be 3 or greater.',
    'string.max': 'Username length must be 30 or less.',
    'string.empty': 'Username cannot be empty.',
    'any.required': 'Username is required.'
  }),
  first_name: Joi.string().alphanum().min(3).max(30).empty().required().messages({
    'string.alphanum': 'First name must be alpanumeric.',
    'string.min': 'First name length must be 3 or greater.',
    'string.max': 'First name length must be 30 or less.',
    'string.empty': 'First name cannot be empty.',
    'any.required': 'First name is required.'
  }),
  last_name: Joi.string().alphanum().min(3).max(30).empty().required().messages({
    'string.alphanum': 'Last name must be alpanumeric.',
    'string.min': 'Last name length must be 3 or greater.',
    'string.max': 'Last name length must be 30 or less.',
    'string.empty': 'Last name cannot be empty.',
    'any.required': 'Last name is required.'
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
  password: Joi.string()
    .pattern(
      new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-“!@#%&\/,><\’:;|_~`])\S{8,99}$/
      )
    )
    .empty()
    .required()
    .messages({
      'string.pattern.base':
        'Password length must be 8 or greater and must contain a number, a special character, an uppercase and lowercase letter.',
      'string.empty': 'Password cannot be empty.',
      'any.required': 'Password is required.'
    }),
  confirm_password: Joi.any().valid(Joi.ref('password')).messages({
    'any.only': 'Must match password.'
  })
});
