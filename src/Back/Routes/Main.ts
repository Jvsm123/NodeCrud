import { Router, Request, Response } from 'express';

export const Main = Router();

Main.get( '/', ( req: Request, res: Response) => res.send("Aqui tem uma raiz!") );
