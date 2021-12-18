import Express, { Request, Response, NextFunction } from 'express';

import "reflect-metadata"; //Para uso do typeorm
import "express-async-errors"; //Para uso de tratamento de erros no express;

import { Admin } from './Routes/Admin';
import { Main } from './Routes/Main';

const Cors = require('cors');
const Session = require("express-session");

const Server = Express();

//Configs
 
	//Sessão
	Server.use( Session(
	{
		secret: "coisa",
		resave: true,
		saveUninitialized: true
	}) );
 
	//Configurações de conexão e host's
	Server.use( Express.urlencoded({ extended: true }) );
	Server.use( Express.json() );
	Server.use( Cors() );
 
//Rotas
Server.use( '/admin', Admin );
Server.use( '/', Main );

//Middleware de erro para todos
Server.use( ( err: Error, req: Request, res: Response, next: NextFunction ) =>
{
	if( err instanceof Error )
		return res
		.status( 500 )
		.json(
		{
			status: "Error",
			message: "Erro interno no servidor!"
		});
});

Server.listen( "8080", () =>
	console.log("Servidor levantado: http://localhost:8080/" ) );
