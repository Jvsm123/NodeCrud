import { getCustomRepository } from 'typeorm';

import { INewData } from '../../Interfaces/Main';

import { PostagensRepo } from '../../Repositories/PostsRepositories';

import { CategoriasRepo } from '../../Repositories/CategoriasRepositories';

export class NewPostagensService
{
	async execute( Data: INewData ): Promise< string >
	{
		try
		{
			const postagensRepo = getCustomRepository( PostagensRepo );

			const categoriasRepo = getCustomRepository( CategoriasRepo );

			const newData: INewData = { ...Data };

			const alreadyCreated = await postagensRepo.findOne({ titulo: newData.titulo })

			if( alreadyCreated ) return "Essa postagem já existe!";

			const categoria = await categoriasRepo.findOne({where: {titulo: Data.categoria} });

			if( !categoria ) throw new Error("Erro ao adicionar a Categoria");

			newData.categoria = categoria;

			newData.slug = newData.slug.replace('/\s/gi', '_').toLowerCase().trim();

			console.debug(
				"Aqui tem um debug!
				!!!!!!!!!!!!!!!!!!!
				!!!!!!!!!!!!!!!!!!
				!!!" + newData
			);

			await postagensRepo.save( newData );

			return "Postagem criada com sucesso!";
		}
		catch( err ) { throw new Error(`Erro ao fazer operação: ${err}`) };
	};
};
