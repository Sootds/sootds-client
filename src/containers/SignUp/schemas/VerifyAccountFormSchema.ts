// EXTERNAL IMPORTS
import Joi from 'joi';

export const VerifyAccountFormSchema = Joi.object().keys({
  confirmation_code: Joi.string().empty().required().messages({
    'string.empty': 'Confirmation code cannot be empty.',
    'any.required': "Confirmation code is required."
  })
});
