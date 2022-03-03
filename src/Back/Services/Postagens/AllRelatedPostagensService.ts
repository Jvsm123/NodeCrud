import { getCustomRepository } from 'typeorm';

import { Postagens } from '../../Database/Entities/Postagens';

import { PostagensRepo } from '../../Repositories/PostsRepositories';

export class AllRelatedPostagensService
{
	async execute(): Promise< Postagens[] >
	{
		try
		{
			const postagemRepo = getCustomRepository( PostagensRepo );

			const allRelatedPost = await postagemRepo.find(
			{
				order: { created_at: "DESC" },
				relations: ["categoria"]
			});

			return allRelatedPost;
		}
		catch( err ) { throw new Error(`Erro ao pegar informações: ${err}`) };
	};
};
