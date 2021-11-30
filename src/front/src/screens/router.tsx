import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//postagens
import { IndexPostagens } from './postagens/IndexPostagens';
import { AddPostagens } from './postagens/AddPostagens';

//Admin
import { IndexAdmin } from './admin/IndexAdmin';

//Users
import { IndexUsuarios } from './usuarios/IndexUsuarios';

export class Router extends Component< {}, {} >
{
    render()
    {
        return (
            <BrowserRouter>
             
                <Routes>
                 
                    <Route path="/admin">
                        <Route path="categorias" element={ <IndexPostagens/> }/>
                        <Route path="addPostagens" element={ <AddPostagens/> } />
                    </Route>
                 
                </Routes>
             
            </BrowserRouter>
        );
    };
};
