import { Request, Response } from 'express';

import { AllRelatedCategoriasService } from '../../Services/Categorias/AllRelatedCategoriasService';

export class AllRelatedCategoriasController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const allRelatedCategoriasService = new AllRelatedCategoriasService();

		const result = await allRelatedCategoriasService.execute();

		return res.json( result );
	};
};
