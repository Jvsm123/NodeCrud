import { AllPostsController } from '../controllers/AllPostsController';
import { NewPostsController } from '../controllers/NewPostsController';
import { EditPostsController } from '../controllers/EditPostsController';
import { DeletePostsController } from '../controllers/DeletePostsController';

import { Router, Request, Response } from 'express';

export const Admin = Router();

const allPostsController = new AllPostsController();
const newPostsController = new NewPostsController();
const editPostsController = new EditPostsController();
const deletePostsController = new DeletePostsController();

Admin.get( '/categorias', allPostsController.handler );
Admin.post( '/categorias/add', newPostsController.handler );
Admin.put( '/categorias/edit/:id', editPostsController.handler );
Admin.delete( '/categorias/remove/:id', deletePostsController.handler );
