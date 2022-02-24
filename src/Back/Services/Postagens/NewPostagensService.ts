import { getCustomRepository } from 'typeorm';

import { PostagensRepo } from '../../Repositories/PostsRepositories';

import { INewPostagemData } from '../../Interfaces/Main';

export class NewPostagensService
{
	async execute( Data: INewPostagemData ): Promise< string >
	{
		try
		{
			const postagensRepo = getCustomRepository( PostagensRepo );

			if( !Data.titulo || !Data.slug )
				throw new Error("Erro, faltam dados!");

			const alreadyCreated = await postagensRepo.findOne({ titulo: Data.titulo })

			if( alreadyCreated ) throw new Error("Essa postagem já existe!");

			await postagensRepo.save( Data );

			return "Postagem criada com sucesso!";
		}
		catch( err ) { throw new Error(`Erro ao fazer operação: ${err}`) };
	};
};
