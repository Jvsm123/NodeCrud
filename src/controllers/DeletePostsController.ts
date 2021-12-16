import { DeletePostsService } from '../services/DeletePostsService';

import { Request, Response } from 'express';

export class DeletePostsController
{
	async handler( req: Request, res: Response )
	{
		const deletePostsService = new DeletePostsService();
	 
		const result = await deletePostsService.execute( req.params.id );
	 
		return res.json( result );
	};
};
