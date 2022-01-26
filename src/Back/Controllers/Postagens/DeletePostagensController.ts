import { Request, Response } from 'express';

export class DeletePostagensController
{
	async handler( req: Request, res: Response ): Promise< Response>
	{
		return res.json( "Deleteadp!" );
	};
};
