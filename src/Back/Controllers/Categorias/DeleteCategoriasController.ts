import { DeleteCategoriasService } from '../../Services/Categorias/DeleteCategoriasService';

import { Request, Response } from 'express';

export class DeleteCategoriasController
{
	async handler( req: Request, res: Response )
	{
		const deleteCategoriasService = new DeleteCategoriasService();

		const querys = req.params.id;

		if( !querys ) throw new Error("Erro, id não especificado!");
	 
		const resMessage = await deleteCategoriasService.execute( querys );
	 
		return res.json( resMessage );
	};
};
