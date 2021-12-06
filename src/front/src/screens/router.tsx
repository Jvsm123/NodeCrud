import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Postagens
import { IndexPostagens } from './postagens/IndexPostagens';
import { AddPostagens } from './postagens/AddPostagens';
import { EditPostagens } from './postagens/EditPostagens';

//Admin
import { IndexAdmin } from './admin/IndexAdmin';

//Users
import { IndexUsuarios } from './usuarios/IndexUsuarios';

//Erros
import { NotFound } from './erros/NotFound';

export class Router extends Component< {}, {} >
{
    render()
    {
        return (
            <BrowserRouter>
             
                <Routes>
                 
                    <Route path="/admin">
                        <Route path="categorias" element={ <IndexPostagens/> } />
                        <Route path="addPostagens" element={ <AddPostagens/> } />
                        <Route path="editPostagens/:id" element={ <EditPostagens/> } />
                    </Route>
                 
                    <Route path="*" element={ <NotFound/> }/>
                 
                </Routes>
             
            </BrowserRouter>
        );
    };
};
