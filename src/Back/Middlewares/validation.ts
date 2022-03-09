import { Request, Response, NextFunction } from 'express';

import { Schema } from 'joi';

export const validate = ( schema: Schema ) => ( req: Request, res: Response, next: NextFunction ) =>
{
	const { error } = schema.validate( req.body );

	if( error ) return res.status(422).send(error.details[0].message);

	next();
};
