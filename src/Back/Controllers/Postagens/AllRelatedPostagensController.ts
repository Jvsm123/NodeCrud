import { Request, Response } from 'express';

import { AllRelatedPostagensService } from '../../Services/Postagens/AllRelatedPostagensService';

export class AllRelatedPostagensController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const allRelatedPostagensService = new AllRelatedPostagensService();

		const result = await allRelatedPostagensService.execute();

		return res.json( result );
	};
};
