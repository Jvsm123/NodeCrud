import { DeleteCategoriasService } from '../../Services/Categorias/DeleteCategoriasService';

import { Request, Response } from 'express';

export class DeleteCategoriasController
{
	async handler( req: Request, res: Response )
	{
		const deleteCategoriasService = new DeleteCategoriasService();
	 
		const resMessage = await deleteCategoriasService
		.execute( req.params.id );
	 
		return res.json( resMessage );
	};
};
