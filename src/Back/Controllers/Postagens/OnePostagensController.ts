import { Request, Response } from 'express';

import { OnePostagensService } from '../../Services/Postagens/OnePostagensService';

export class OnePostagensController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const onePostagensService = new OnePostagensService();

		const ID = req.params.id;

		if( !ID ) throw new Error("faltam dados!");

		const result = await onePostagensService.execute( ID );

		return res.json( result );
	};
}
