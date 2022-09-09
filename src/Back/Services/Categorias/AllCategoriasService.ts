import { getCustomRepository } from 'typeorm';

import { Categorias } from '../../Database/Entities/Categorias'

import { CategoriasRepo } from '../../Repositories/CategoriasRepositories';

export class AllCategoriasService
{
	async execute(): Promise< Categorias[] >
	{
		try
		{
			const categoriasRepo = getCustomRepository( CategoriasRepo );

			let result = await categoriasRepo.find({ order: { created_at: "DESC" } });

			return result;
		}
		catch( err ) { throw new Error("Erro ao tentar fazer oprações: " + err) };
	};
};
