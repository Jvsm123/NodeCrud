import { getCustomRepository } from 'typeorm';

import { Categorias } from '../../Database/Entities/Categorias';

import { CategoriasRepo } from '../../Repositories/CategoriasRepositories';

export class AllRelatedCategoriasService
{
	async execute(): Promise< Categorias[] >
	{
		try
		{
			const categoriasRepo = getCustomRepository( CategoriasRepo );

			const categoria = await categoriasRepo.find(
			{
				order: { created_at: "DESC" },
				relations: ["postagens"]
			});

			return categoria;
		}
		catch( err ) { throw new Error(`Erro ao tentar faze operação: ${err}`) };
	};
};
