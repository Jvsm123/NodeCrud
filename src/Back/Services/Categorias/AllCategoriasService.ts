import { getCustomRepository } from 'typeorm';

import { CategoriasRepo } from '../../Repositories/CategoriasRepositories';

export class AllCategoriasService
{
	async execute(): Promise< [] >
	{
		let allPosts: any[any];

		const categoriasMysqlRepo = getCustomRepository( CategoriasRepo );

		allPosts = await categoriasMysqlRepo.find();

		return allPosts;
	};
};
