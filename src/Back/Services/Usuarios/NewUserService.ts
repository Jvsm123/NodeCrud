import { getCustomRepository } from 'typeorm';

import { Usuarios } from '../../Database/Entities/Usuarios';

export class NewUserService
{
	async execute( data ): Promise< string >
	{
		try
		{
			const userRepo = getCustomRepository( Usuarios );
			
			await userRepo.save( data );

			return "Usuário criado com sucesso!";
		}
		catch( err ) { throw new Error(`Erro ao criar usuário: ${err}`) };
	};
};
