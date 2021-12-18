import { EditCategoriasService } from '../../Services/Categorias/EditCategoriasService';

import { Request, Response } from 'express';

export class EditCategoriasController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const editCategoriasService = new EditCategoriasService();
	 
		const resMessage = await editCategoriasService
		.execute( req.body, req.params.id );
	 
		return res.json( resMessage );
	};
};
