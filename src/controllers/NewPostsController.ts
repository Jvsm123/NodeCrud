import { Request, Response } from 'express';

import { NewPostsService } from '../services/NewPostsService';

export class NewPostsController
{
    async handler( req: Request, res: Response ): Promise< Response >
    {
        const { nome, slug } = req.body;
     
        const newPostsService = new NewPostsService();
     
        const newPostMsg = await newPostsService.execute( { nome: nome, slug: slug } );
     
        return res.json( newPostMsg );
    };
};
