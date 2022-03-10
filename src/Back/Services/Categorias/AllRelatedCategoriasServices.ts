import { getCustomRepository } from 'typeorm';

import { CategoriasRepo } from '../../Repositories/CategoriasRepositories';

export class AllRelatedCategoriasServices
{
	async execute(): Promise< Response >
	{
		try
		{
			const CategoriasRepo = getCustomRepository( CategoriasRepo );

			const categorias = await CategoriasRepo.find();

			return categorias;
		}
		catch( err ) { throw new Error(`Erro ao tentar faze operação: ${err}`) };
	};
};
