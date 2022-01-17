// EXTERNAL IMPORTS
import Joi from 'joi';

export const BillingInfoFormSchema = Joi.object().keys({
  cardholderName: Joi.string().min(2).max(30).empty().required().messages({
    'string.min': 'Cardholder name length must be 2 or greater.',
    'string.max': 'Cardholder name length must be 30 or less.',
    'string.empty': 'Cardholder name cannot be empty.',
    'any.required': 'Cardholder name is required.'
  }),
  cardNumber: Joi.string().empty().required().messages({
    'string.empty': 'Card number cannot be empty.',
    'any.required': 'Card number is required.'
  }),
  securityCode: Joi.string().empty().required().messages({
    'string.empty': 'Card number cannot be empty.',
    'any.required': 'Card number is required.'
  }),
  expirationDate: Joi.object().keys({
    month: Joi.number().min(1).max(12).required().messages({
      'number.base': 'You must select a month.',
      'number.min': 'Month is invalid.',
      'number.max': 'Month is invalid.',
      'any.required': 'Month is required.'
    }),
    year: Joi.number().empty().required().messages({
      'number.base': 'You must select a year.',
      'any.required': 'Year is required.'
    })
  })
});
