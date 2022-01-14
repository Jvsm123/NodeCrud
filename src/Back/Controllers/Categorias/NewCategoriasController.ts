import { Request, Response } from 'express';

import { NewCategoriasService } from '../../Services/Categorias/NewCategoriasService';

export class NewCategoriasController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const newCategoriasService = new NewCategoriasService();
	 
		const resMessage = await newCategoriasService
		.execute( req.body );
	 
		return res.json( resMessage );
	};
};
