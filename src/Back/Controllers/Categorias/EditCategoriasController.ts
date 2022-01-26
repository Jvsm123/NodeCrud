import { EditCategoriasService } from '../../Services/Categorias/EditCategoriasService';

import { Request, Response } from 'express';

export class EditCategoriasController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const editCategoriasService = new EditCategoriasService();

		if( !req.body || !req.params.id ) throw new Error("Faltam dados!");
	 
		const result = await editCategoriasService
		.execute( req.body, req.params.id );
	 
		return res.json( result );
	};
};
