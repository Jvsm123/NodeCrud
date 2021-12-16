import { Request, Response } from 'express';

import { NewPostsService } from '../services/NewPostsService';

export class NewPostsController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const newPostsService = new NewPostsService();
	 
		const newPostMsg = await newPostsService.execute( req.body );
	 
		return res.json( newPostMsg );
	};
};
