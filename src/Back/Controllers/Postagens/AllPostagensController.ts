import { Request, Response } from 'express';

import { AllPostagensService } from '../../Services/Postagens/AllPostagensService';

export class AllPostagensController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const allPostagensService = new AllPostagensService();

		const result = await allPostagensService.execute();

		return res.json( result );
	};
};
