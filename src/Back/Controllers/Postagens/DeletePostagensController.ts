import { DeletePostagensService } from '../../Services/Postagens/DeletePostagensService';

import { Request, Response } from 'express';

export class DeletePostagensController
{
	async handler( req: Request, res: Response ): Promise< Response>
	{
		const deletePostagensService = new DeletePostagensService();

		const querys = req.params.id;

		if( !querys ) throw new Error("Erro, id não especificado!");

		const resMessage = await deletePostagensService.execute( querys );

		return res.json( resMessage );
	};
};
