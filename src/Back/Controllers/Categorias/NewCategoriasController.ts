import { Request, Response } from 'express';

import { NewCategoriasService } from '../../Services/Categorias/NewCategoriasService';

export class NewCategoriasController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const newCategoriasService = new NewCategoriasService();

		if( !req.body.titulo || !req.body.slug ) throw new Error("Faltam dados!");
	 
		const resMessage = await newCategoriasService.execute( req.body );
	 
		return res.json( resMessage );
	};
};
