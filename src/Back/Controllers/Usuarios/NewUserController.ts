import { Request, Response } from 'express';

import { NewUserService } from '../../Services/Usuarios/NewUserService';

export class NewUserController
{
	async handler( req: Request, res: Response ): Promise< Response >
	{
		const newUserService = new NewUserService();

		const result = await newUserService.execute();

		return res.json( result );
	};
};
