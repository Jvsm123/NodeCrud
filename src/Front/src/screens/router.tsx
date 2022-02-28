import { Component } from 'react';

//Not Found
import { NotFound } from './erros/NotFound';

import { IndexPost } from './post/IndexPost';

//Home
import { IndexHome } from './home/IndexHome';

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
					<Route path="/" element={ <IndexHome/> }/>

					<Route path="/post/:id" element={ <IndexPost/> }/>

					<Route path="/admin">
						<Route path="categorias" element={ <IndexCategorias/> }/>
						<Route path="addcategorias" element={ <AddCategorias/> }/>
						<Route path="editcategorias" element={ <EditCategorias/> }/>

						<Route path="postagens" element={ <IndexPostagens/> }/>
						<Route path="addpostagens" element={ <AddPostagens/> }/>
						<Route path="editpostagens" element={ <EditPostagens/> }/>
					</Route>

					<Route path="*" element={ <NotFound/> }/>
				</Routes>
			</BrowserRouter>
		);
	};
};
