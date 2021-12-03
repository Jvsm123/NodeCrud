import { EditPostsService } from '../services/EditPostsService';

import { Request, Response } from 'express';

export class EditPostsController
{
    async handler( req: Request, res: Response ): Promise< Response >
    {
        const editPostsService = new EditPostsService();
     
        const editRes = editPostsService.execute( req.body.data );
     
        return res.json( editRes );
    };
};
