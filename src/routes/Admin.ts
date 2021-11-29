import { AllPostsController } from '../controllers/AllPostsController';

import { Router, Request, Response } from 'express';

export const Admin = Router();

const allPostsController = new AllPostsController();

Admin.get('/', ( req:Request, res:Response ) => res.send("Painel do ADM") );
Admin.get('/posts', ( req:Request, res:Response ) => res.send("Paginas de posts") );
Admin.get('/categorias', allPostsController.handler );
