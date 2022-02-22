import { getCustomRepository } from 'typeorm';

import { Categorias } from '../../Database/Entities/Categorias'

import { CategoriasRepo } from '../../Repositories/CategoriasRepositories';

export class AllCategoriasService
{
	async execute(): Promise< Categorias[] >
	{
		let allCategorias: Categorias[];

		const categoriasRepo = getCustomRepository( CategoriasRepo );

		allCategorias = await categoriasRepo.find({ order: { created_at: "DESC" } });

		return allCategorias;
	};
};
