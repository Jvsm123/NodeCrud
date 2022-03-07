import Joi from 'joi';

export const schema = Joi.object().keys(
{
	titulo: Joi.string().min(4).max(40).required(),
	slug: Joi.string().min(4).max(40).required()
});
