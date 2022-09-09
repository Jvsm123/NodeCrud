import { getCustomRepository } from 'typeorm';

import { Categorias } from '../../Database/Entities/Categorias';

import { CategoriasRepo } from '../../Repositories/CategoriasRepositories';

export class OneCategoriasService
{
	async execute( ID: string ): Promise< Categorias >
	{
		try
		{
			const categoriasRepo = getCustomRepository( CategoriasRepo );

			const categorias = await categoriasRepo.findOne({ where: { id: ID } });

			if( !categorias ) throw new Error("Não econtrado!");

			return categorias;
		}
		catch( err ) { throw new Error(`Erro ao listar: ${err}`) };
	};
};
