import Express, { Request, Response } from 'express';

import "reflect-metadata";
import { getConnection } from 'typeorm';

import "./database";

const Cors = require('cors');

const server = Express();

//Configs
    server.use( Express.urlencoded( { extended: false } ) );
    server.use( Express.json() );
    server.use( Cors() )

//Rotas;
    //Get
    server.get('/', ( req: Request, res: Response ) =>
    {
        res.send({ data: "teste de conectividade!"});
    });
 
    //Post

server.listen( "8080", () =>
    console.log("Servidor levantado: http://localhost:8080/" ) );
