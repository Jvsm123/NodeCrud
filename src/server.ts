import Express, { Request, Response } from 'express';

import "reflect-metadata";

import { Admin } from './routes/Admin';
import { Main } from './routes/Main';

const Cors = require('cors');
const Session = require("express-session");

const server = Express();

//Configs

    //Sessão e FlashMessages
    server.use( Session(
    {
        secret: "coisa",
        resave: true,
        saveUninitialized: true
    }));

    //Configurações de conexão e host's
    server.use( Express.urlencoded( { extended: true } ) );
    server.use( Express.json() );
    server.use( Cors() );

//Rotas
    server.use( '/admin', Admin );
    server.use( '/', Main );

server.listen( "8080", () =>
    console.log("Servidor levantado: http://localhost:8080/" ) );
