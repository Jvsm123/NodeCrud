import { getCustomRepository } from 'typeorm';

import { PostagensRepo } from '../../Repositories/PostsRepositories';

import { INewPostagemData } from '../../Interfaces/Main';

export class NewPostagensService
{
	async execute( Data: INewPostagemData ): Promise< string>
	{
		try
		{
			const postagensRepo = getCustomRepository( PostagensRepo );

			await postagensRepo.save( Data );

			return "Postagem criada com sucesso!";
		}
		catch( err ) { throw new Error(`Erro ao fazer operação: ${err}`) };
	};
};
