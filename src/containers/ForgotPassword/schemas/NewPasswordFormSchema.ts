// EXTERNAL IMPORTS
import Joi from 'joi';

export const NewPasswordFormSchema = Joi.object().keys({
  verification_code: Joi.string().empty().required().messages({
    'string.empty': 'Verification code cannot be empty.',
    'any.required': 'Verification code is required.'
  }),
  new_password: Joi.string()
    .pattern(
      new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-“!@#%&\/,><\’:;|_~`])\S{8,99}$/
      )
    )
    .empty()
    .required()
    .messages({
      'string.pattern.base':
        'New password length must be 8 or greater and must contain a number, a special character, an uppercase and lowercase letter.',
      'string.empty': 'New password cannot be empty.',
      'any.required': 'New password is required.'
    })
});
