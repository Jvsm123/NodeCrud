import { getCustomRepository } from 'typeorm';

import { Postagens } from '../../Database/Entities/Postagens';

import { PostagensRepo } from '../../Repositories/PostsRepositories';

export class AllPostagensService
{
	async execute(): Promise< Postagens[] >
	{
		let allPosts: Postagens[];

		const postagensRepo = getCustomRepository( PostagensRepo );

		allPosts = await postagensRepo.find(
		{
			order: { created_at: "DESC" },
			relations: ["categoria"]
		});

		return allPosts;
	};
};
