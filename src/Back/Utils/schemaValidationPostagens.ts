import Joi from 'joi';

export const schema = Joi.object().keys(
{
	titulo: Joi.string().min(4).max(40).required(),
	slug: Joi.string().min(4).max(40).required(),
	descricao: Joi.string().min(4).max(40).required(),
	categoria: Joi.string().min(4).max(40).required(),
	conteudo: Joi.array().items( Joi.string().required() ).max(20000).required()
});
