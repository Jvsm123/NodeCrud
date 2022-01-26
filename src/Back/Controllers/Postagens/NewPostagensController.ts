import { Request, Response } from 'express';

export class NewPostagensController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		return res.json( "nova postagem!" );
	};
};
