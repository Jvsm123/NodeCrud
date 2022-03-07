import { Request, Response, NextFunction } from 'express';

export const validate = ( schema ) => ( req: Request, res: Response, next: NextFunction ) =>
{
	const { error } = schema.validate( req.body );

	if( error ) return res.status(422).send(error.details[0].message);

	next();
};
