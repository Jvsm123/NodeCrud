import { AllPostsService } from '../services/AllPostsService';

import { Request, Response } from 'express';

export class AllPostsController
{
    async handler( req: Request, res: Response ): Promise< Response >
    {
        const allPostsService = new AllPostsService();
     
        const posts = await allPostsService.execute();
     
        return res.json( posts );
    };
};
