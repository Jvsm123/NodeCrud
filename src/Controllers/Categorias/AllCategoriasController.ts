import { AllCategoriasService } from '../../Services/Categorias/AllCategoriasService';

import { Request, Response } from 'express';

export class AllCategoriasController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const allCategoriasService = new AllCategoriasService();
	 
		const allPosts = await allCategoriasService
		.execute( req.query.id );
	 
		return res.json( allPosts );
	};
};
