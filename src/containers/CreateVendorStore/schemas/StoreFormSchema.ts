// EXTERNAL IMPORTS
import Joi from 'joi';

export const StoreFormSchema = Joi.object().keys({
    store_name: Joi.string().max(20).empty().required().messages({
        'string.empty': 'Store name cannot be empty.',
        'string.max': "Store name length must be 20 or less",
        'any.required': "Store name is required."
    }),
    store_description: Joi.string().optional().allow('')
})