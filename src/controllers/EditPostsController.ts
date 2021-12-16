import { EditPostsService } from '../services/EditPostsService';

import { Request, Response } from 'express';

export class EditPostsController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const editPostsService = new EditPostsService();
	 
		const editRes = await editPostsService.execute( req.body, req.params.id );
	 
		return res.json( editRes );
	};
};
