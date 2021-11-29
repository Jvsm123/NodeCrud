import Express, { Request, Response } from 'express';

import "reflect-metadata";

import { Admin } from './routes/Admin';
import { Main } from './routes/Main';

const Cors = require('cors');

const server = Express();

//Configs
    server.use( Express.urlencoded( { extended: true } ) );
    server.use( Express.json() );
    server.use( Cors() );

//Rotas
    server.use( '/admin', Admin );
    server.use( '/', Main );

server.listen( "8080", () =>
    console.log("Servidor levantado: http://localhost:8080/" ) );
