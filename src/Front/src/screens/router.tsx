import { Component } from 'react';

//Not Found
import { NotFound } from './erros/NotFound';

//Admin
import { IndexAdmin } from './admin/IndexAdmin';

//Users
import { IndexUsuarios } from './usuarios/IndexUsuarios';

//Categorias
import { AddCategorias } from './categorias/AddCategorias';
import { EditCategorias } from './categorias/EditCategorias';
import { IndexCategorias } from './categorias/IndexCategorias';

//Postagens
import { AddPostagens } from './postagens/AddPostagens';
import { EditPostagens } from './postagens/EditPostagens';
import { IndexPostagens } from './postagens/IndexPostagens';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export class Router extends Component< {}, {} >
{
	render()
	{
		return (
			<BrowserRouter>
				<Routes>
					<Route path="/admin">
						<Route path="categorias" element={ <IndexCategorias/> }/>
						<Route path="addCategorias" element={ <AddCategorias/> }/>
						<Route path="editCategorias" element={ <EditCategorias/> }/>

						<Route path="postagens" element={ <IndexPostagens/> }/>
						<Route path="addPostagens" element={ <AddPostagens/> }/>
						<Route path="editPostagens" element={ <EditPostagens/> }/>
					</Route>

					<Route path="*" element={ <NotFound/> }/>
				</Routes>
			</BrowserRouter>
		);
	};
};
