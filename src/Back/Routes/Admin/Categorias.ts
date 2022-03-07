import { Router, Request, Response } from 'express';

import { validate } from '../../Middlewares/validation';

import { schema } from '../../Utils/schemaValidationCategorias';

import { OneCategoriasController } from '../../Controllers/Categorias/OneCategoriasController';
import { AllCategoriasController } from '../../Controllers/Categorias/AllCategoriasController';
import { NewCategoriasController } from '../../Controllers/Categorias/NewCategoriasController';
import { EditCategoriasController } from '../../Controllers/Categorias/EditCategoriasController';
import { DeleteCategoriasController } from '../../Controllers/Categorias/DeleteCategoriasController';

export const Categorias = Router();

const oneCategoriasController = new OneCategoriasController();
const allCategoriasController = new AllCategoriasController();
const newCategoriasController = new NewCategoriasController();
const editCategoriasController = new EditCategoriasController();
const deleteCategoriasController = new DeleteCategoriasController();

Categorias.get('/categorias/all', allCategoriasController.handler);
Categorias.get('/categorias/one/:id', oneCategoriasController.handler);

Categorias.post('/categorias/add', validate( schema ), newCategoriasController.handler);

Categorias.put('/categorias/edit/:id', editCategoriasController.handler);

Categorias.delete('/categorias/remove/:id', deleteCategoriasController.handler);
