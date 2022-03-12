import Express, { Request, Response, NextFunction } from 'express';

import Session from "express-session";

import Main from './Routes';

import ErrorHandler from './Middlewares/errorHandler';

import Cors from 'cors';

import { init } from './Settings';

init();

import "./Database/index";

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
Server.use( '/', Main.filter( i => i ) );

// Middleware de erro para todos
Server.use( ErrorHandler );

Server.listen( process.env.PORT, () => console.log(">>>> LISTENING <<<<") );
