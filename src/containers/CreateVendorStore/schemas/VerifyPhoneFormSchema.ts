// EXTERNAL IMPORTS
import Joi from 'joi';

export const VerifyPhoneFormSchema = Joi.object().keys({
    confirmation_code: Joi.string().empty().required().messages({
        'string.empty': 'Confirmation code cannot be empty.',
        'any.required': "Confirmation code is required."
    }),
    phone_number: Joi.number().empty().required().messages({
        'number.empty': 'Phone number cannot be empty.',
        'any.required': "Phone number is required."
    })
})