import { getCustomRepository } from 'typeorm';

import { CategoriasRepo } from '../../Repositories/CategoriasRepositories';

export class OneCategoriasService
{
	async execute( ID: string ): Promise< any >
	{
		try
		{
			const categoriasRepo = getCustomRepository( CategoriasRepo );

			const result = await categoriasRepo.findOne({ where: { id: ID } });

			if( !result ) throw new Error("Não econtrado!");

			return result;
		}
		catch( err ) { throw new Error(`Erro ao listar: ${err}`) };
	};
};
