import { AllCategoriasController } from '../Controllers/Categorias/AllCategoriasController';
import { NewCategoriasController } from '../Controllers/Categorias/NewCategoriasController';
import { EditCategoriasController } from '../Controllers/Categorias/EditCategoriasController';
import { DeleteCategoriasController } from '../Controllers/Categorias/DeleteCategoriasController';

import { Router, Request, Response } from 'express';

export const Admin = Router();

const allCategoriasController = new AllCategoriasController();
const newCategoriasController = new NewCategoriasController();
const editCategoriasController = new EditCategoriasController();
const deleteCategoriasController = new DeleteCategoriasController();

Admin.get('/categorias/all', allCategoriasController.handler);
Admin.post('/categorias/add', newCategoriasController.handler);
Admin.put('/categorias/edit/:id', editCategoriasController.handler);
Admin.delete('/categorias/remove/:id', deleteCategoriasController.handler);
