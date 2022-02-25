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

			const newData: any = { ...Data };

			const alreadyCreated = await postagensRepo.findOne({ titulo: newData.titulo })

			if( alreadyCreated ) throw new Error("Essa postagem já existe!");

			const categoria = await categoriasRepo
				.findOne({where: {titulo: Data.titulo} });

			newData.categoria = categoria;

			await postagensRepo.save( newData );

			return "Postagem criada com sucesso!";
		}
		catch( err ) { throw new Error(`Erro ao fazer operação: ${err}`) };
	};
};
