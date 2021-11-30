import { AllPostsController } from '../controllers/AllPostsController';
import { NewPostsController } from '../controllers/NewPostsController';

import { Router, Request, Response } from 'express';

export const Admin = Router();

const allPostsController = new AllPostsController();
const newPostsController = new NewPostsController();

Admin.get('/', ( req:Request, res:Response ) => res.send("Painel do ADM") );
Admin.get('/addPostagens', ( req:Request, res:Response ) => res.send("Paginas de posts") );
Admin.get('/categorias', allPostsController.handler );
