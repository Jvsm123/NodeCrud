import Joi from 'joi';

export const schema = Joi.object().keys(
{
	titulo: Joi.string().required(),
	slug: Joi.string().required()
});
