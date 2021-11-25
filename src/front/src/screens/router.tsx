import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Listagem } from './postagens/listagem';
import { AddPostagens } from './postagens/addPostagens';

export class Router extends Component< {}, {} >
{
    render()
    {
        return (
            <BrowserRouter>
             
                <Routes>
                 
                    <Route path="/" element={ <Listagem/> }>
                        <Route path="addPostagens" element={ <AddPostagens/> } />
                    </Route>
                 
                </Routes>
             
            </BrowserRouter>
        );
    };
};
