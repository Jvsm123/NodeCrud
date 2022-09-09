import { Request, Response, NextFunction } from 'express';

export default ( err: Error, req: Request, res: Response, next: NextFunction ) =>
{
	if( err instanceof Error )
		return res.status( 500 )
		.json({ status: "Error", message: "" + err });
};

