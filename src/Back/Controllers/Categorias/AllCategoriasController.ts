import { AllCategoriasService } from '../../Services/Categorias/AllCategoriasService';

import { Request, Response } from 'express';

export class AllCategoriasController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const allCategoriasService = new AllCategoriasService();

		const querys = req.query.id;
	 
		const allPosts = await allCategoriasService
		.execute( querys && querys );
	 
		return res.json( allPosts );
	};
};
