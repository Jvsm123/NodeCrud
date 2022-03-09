import Joi from 'joi';

export const schema = Joi.object().keys(
{
	titulo: Joi.string().max(40).required(),
	slug: Joi.string().max(40).required(),
	descricao: Joi.string().max(40).required(),
	categoria: Joi.string().max(40).required(),
	conteudo: Joi.string().max(20000).required()
});
