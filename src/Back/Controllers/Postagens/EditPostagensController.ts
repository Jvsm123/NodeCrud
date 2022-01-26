import { Request, Response } from 'express';

export class EditPostagensController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		return res.json("Editado!");
	};
};
