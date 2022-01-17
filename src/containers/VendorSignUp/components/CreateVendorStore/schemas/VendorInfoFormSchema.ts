// EXTERNAL IMPORTS
import Joi from 'joi';

export const VendorInfoFormSchema = Joi.object().keys({
  name: Joi.string().min(2).max(30).empty().required().messages({
    'string.min': 'Vendor name length must be 2 or greater.',
    'string.max': 'Vendor name length must be 30 or less.',
    'string.empty': 'Vendor name cannot be empty.',
    'any.required': 'Vendor name is required.'
  }),
  description: Joi.string().optional().allow('')
});
