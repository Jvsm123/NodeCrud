import { Request, Response } from 'express';

import { NewPostsService } from '../services/NewPostsService';

export class NewPostsController
{
    async handler( req: Request, res: Response ): Promise< void >
    {
        const { nome, slug } = req.body;
     
        const newPostsService = new NewPostsService();
     
        const newPost = newPostsService.execute( { nome: nome, slug: slug } );
     
        res.redirect( "http://localhost:3000/admin/categorias" );
    };
};
