import { getCustomRepository } from 'typeorm';

import { PostagensRepo } from '../../Repositories/PostsRepositories';

export class AllRelatedPostagensService
{
	async execute(): Promise< any >
	{
		const postagemRepo = getCustomRepository( PostagensRepo );

		const result = await postagemRepo.find({ relations: ["categoria"] });

		if( !result ) throw new Error("Não há resutados!");

		return result;
	};
};
