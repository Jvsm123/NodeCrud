import { Request, Response } from 'express';

import { OneCategoriasService } from '../../Services/Categorias/OneCategoriaService';

export class OneCategoriasController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const oneCategoriaService = new OneCategoriasService();

		const ID = req.params.id;

		if( !ID ) throw new Error("faltam dados!");

		const result = await oneCategoriaService.execute( ID );

		return res.json( result );
	};
};
