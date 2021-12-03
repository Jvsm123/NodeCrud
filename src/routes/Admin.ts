import { AllPostsController } from '../controllers/AllPostsController';
import { NewPostsController } from '../controllers/NewPostsController';
import { EditPostsController } from '../controllers/EditPostsController';

import { Router, Request, Response } from 'express';

export const Admin = Router();

const allPostsController = new AllPostsController();
const newPostsController = new NewPostsController();
const editPostsController = new EditPostsController();

Admin.get('/categorias', allPostsController.handler );

Admin.post('/categorias/edit/:id', editPostsController.handler );
Admin.post('/addPostagens', newPostsController.handler );
