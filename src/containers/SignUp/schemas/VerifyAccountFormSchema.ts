// EXTERNAL IMPORTS
import Joi from 'joi';

export const VerifyAccountFormSchema = Joi.object().keys({
  verification_code: Joi.string().empty().required().messages({
    'string.empty': 'Verification code cannot be empty.',
    'any.required': 'Verification code is required.'
  })
});
