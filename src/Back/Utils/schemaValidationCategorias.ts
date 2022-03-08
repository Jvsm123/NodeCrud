import Joi from 'joi';

export const schema = Joi.object().keys(
{
	titulo: Joi.string().max(40).required(),
	slug: Joi.string().max(40).required()
});
