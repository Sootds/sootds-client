// EXTERNAL IMPORTS
import Joi from 'joi';

export const StoreInfoFormSchema = Joi.object().keys({
  name: Joi.string().min(2).max(30).empty().required().messages({
    'string.min': 'Store name length must be 2 or greater.',
    'string.max': 'Store name length must be 30 or less.',
    'string.empty': 'Store name cannot be empty.',
    'any.required': 'Store name is required.'
  }),
  urlName: Joi.string()
    .min(2)
    .pattern(/^[a-z0-9_-]*$/)
    .optional()
    .allow('')
    .messages({
      'string.min': 'Store name length must 2 or greater.',
      'string.pattern.base': 'Store URL name must be URL friendly.'
    }),
  description: Joi.string().optional().allow('')
});
