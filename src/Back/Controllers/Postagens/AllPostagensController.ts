import { Request, Response } from 'express';

export class AllPostagensController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		return res.json("All postagens!");
	};
};
