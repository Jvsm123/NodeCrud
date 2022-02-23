import { Request, Response } from 'express';

import { NewPostagensService } from '../../Services/Postagens/NewPostagensService';

export class NewPostagensController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const newPostagensService = new NewPostagensService();

		const body = req.body;

		if( !body.titulo || !body.slug || body.descricao || body.conteudo || body.categoria )
			throw new Error("Faltam dados!!!");

		const result = await newPostagensService.execute( req.body )

		return res.json( result );
	};
};
