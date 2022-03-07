import { Router } from 'express';

import { validate } from '../../Middlewares/validation';

import { schema } from '../../Utils/schemaValidationPostagens';

import { AllPostagensController } from '../../Controllers/Postagens/AllPostagensController';
import { NewPostagensController } from '../../Controllers/Postagens/NewPostagensController';
import { OnePostagensController } from '../../Controllers/Postagens/OnePostagensController';
import { EditPostagensController } from '../../Controllers/Postagens/EditPostagensController';
import { DeletePostagensController } from '../../Controllers/Postagens/DeletePostagensController';
import { AllRelatedPostagensController } from '../../Controllers/Postagens/AllRelatedPostagensController';

export const Postagens = Router();

const onePostagensController = new OnePostagensController();
const allPostagensController = new AllPostagensController();
const newPostagensController = new NewPostagensController();
const editPostagensController = new EditPostagensController();
const deletePostagensController = new DeletePostagensController();
const allRelatedPostagensController = new AllRelatedPostagensController();

Postagens.get('/postagens/all', allPostagensController.handler);
Postagens.get('/postagens/one/:id', onePostagensController.handler);
Postagens.get('/postagens/all/related', allRelatedPostagensController.handler);

Postagens.post('/postagens/add', validate( schema ), newPostagensController.handler);

Postagens.put('/postagens/edit/:id', editPostagensController.handler);

Postagens.delete('/postagens/remove/:id', deletePostagensController.handler);
