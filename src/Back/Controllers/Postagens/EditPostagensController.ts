import { Request, Response } from 'express';

import { EditPostagensService } from '../../Services/Postagens/EditPostagensService';

export class EditPostagensController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const editPostagensService = new EditPostagensService();

		if( !req.body || !req.params.id ) throw new Error("Faltam dados!");

		const result = await editPostagensService
		.execute( req.body, req.params.id );

		return res.json( result );
	};
};
