import { Request, Response } from 'express';

import { AllRelatedCategoriasServices } from '../../Services/Categorias/AllRelatedCategoriasServices';

export class AllRelatedCategorias
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const allRelatedCategorias = new AllRelatedCategoriasServices();

		const result = await allRelatedCategorias.execute();

		return res.json( result );
	};
};
