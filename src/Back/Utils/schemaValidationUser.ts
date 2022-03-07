import Joi from 'joi';

export const schema = Joi.object().keys(
{
	nome: Joi.string().max(30).required(),
	email: Joi.string().email({ minDomainSegments: 3, tlds: { allow: ['com', 'br', 'net'] } }).max(30).required(),
	senha: Joi.string().pattern(new RegExp('/[a-zA-Z0-9]{3,30}$')).max(16).required(),
	admin: Joi.boolean().required()
});
