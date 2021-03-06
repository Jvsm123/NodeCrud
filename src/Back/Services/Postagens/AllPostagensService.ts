import { getCustomRepository } from 'typeorm';

import { Postagens } from '../../Database/Entities/Postagens';

import { PostagensRepo } from '../../Repositories/PostsRepositories';

export class AllPostagensService
{
	async execute(): Promise< Postagens[] >
	{
		const postagensRepo = getCustomRepository( PostagensRepo );

		const allPosts = await postagensRepo.find({ order: { created_at: "DESC" } });

		return allPosts;
	};
};
