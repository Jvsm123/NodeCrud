import { getCustomRepository } from 'typeorm';

import { PostagensRepo } from '../../Repositories/PostsRepositories';

import { CategoriasRepo } from '../../Repositories/CategoriasRepositories'

import { INewPostagemData } from '../../Interfaces/Main';

export class NewPostagensService
{
	async execute( Data: INewPostagemData ): Promise< string >
	{
		try
		{
			const postagensRepo = getCustomRepository( PostagensRepo );

			const categoriasRepo = getCustomRepository( CategoriasRepo );

			if( !Data.titulo || !Data.slug )
				throw new Error("Erro, faltam dados!");

			const alreadyCreated = await postagensRepo.findOne({ titulo: Data.titulo })

			if( alreadyCreated ) throw new Error("Essa postagem já existe!");

			const categoria = await categoriasRepo
				.findOne({where: {slug: Data.slug}});

			if( !categoria )
				throw new Error("esse slug não corresponde a nenhuma categoria!");

			Data.categoria = categoria;

			await postagensRepo.save( Data );

			return "Postagem criada com sucesso!";
		}
		catch( err ) { throw new Error(`Erro ao fazer operação: ${err}`) };
	};
};
