import Joi from 'joi';

export const schema = Joi.object().keys(
{
	titulo: Joi.string().required(),
	slug: Joi.string().required(),
	descricao: Joi.string().required(),
	categoria: Joi.string().required(),
	conteudo: Joi.string().max(20000).required()
});
