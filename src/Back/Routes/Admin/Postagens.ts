import { Router } from 'express';

import { AllPostagensController } from '../../Controllers/Postagens/AllPostagensController';
import { NewPostagensController } from '../../Controllers/Postagens/NewPostagensController';
import { EditPostagensController } from '../../Controllers/Postagens/EditPostagensController';
import { DeletePostagensController } from '../../Controllers/Postagens/DeletePostagensController';
import { AllRelatedPostagensController } from '../../Controllers/Postagens/AllRelatedPostagensController';

export const Postagens = Router();

const allPostagensController = new AllPostagensController();
const newPostagensController = new NewPostagensController();
const editPostagensController = new EditPostagensController();
const deletePostagensController = new DeletePostagensController();
const allRelatedPostagensController = new AllRelatedPostagensController();

Postagens.get('/postagens/all', allPostagensController.handler);
Postagens.post('/postagens/add', newPostagensController.handler);
Postagens.put('/postagens/edit/:id', editPostagensController.handler);
Postagens.delete('/postagens/remove/:id', deletePostagensController.handler);
Postagens.get('/postagens/all/related', allRelatedPostagensController.handler);
