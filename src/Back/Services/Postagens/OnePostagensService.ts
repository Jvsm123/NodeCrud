import { getCustomRepository } from 'typeorm';

import { Postagens } from '../../Database/Entities/Postagens';

import { PostagensRepo } from '../../Repositories/PostsRepositories';

export class OnePostagensService
{
	async execute( ID: string ): Promise< Postagens >
	{
		try
		{
			const categoriasRepo = getCustomRepository( PostagensRepo );

			const categorias = await categoriasRepo.findOne({ where: { id: ID } });

			if( !categorias ) throw new Error("Não econtrado!");

			return categorias;
		}
		catch( err ) { throw new Error(`Erro ao listar: ${err}`) };
	};
};
