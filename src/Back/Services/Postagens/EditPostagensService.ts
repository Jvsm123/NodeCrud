import { getCustomRepository } from 'typeorm';

import { IEditData } from '../../Interfaces/Main';

import { PostagensRepo } from '../../Repositories/PostsRepositories';

export class EditPostagensService
{
	async execute( Data: IEditData, ID: string ): Promise< string >
	{
		try
		{
			const postagemRepo = getCustomRepository( PostagensRepo );

			const postagem = await postagemRepo.findOne({ where: { id: ID } })

			Data.newSlug = Data.newSlug.replace('/\s/gi', '_').toLowerCase().trim();

			if( postagem )
			{
				Data.newTitulo && (postagem.titulo = Data.newTitulo);

				Data.newSlug && (postagem.slug = Data.newSlug);

				Data.newConteudo && (postagem.conteudo = Data.newConteudo);

				Data.newDescricao && (postagem.descricao = Data.newDescricao);

				Data.newCategoria && (postagem.categoria = Data.newCategoria );
			}
			else return "Postagem não encontrada!";

			await postagemRepo.update( ID, postagem );
			
			return "Postagem editada com sucess!";
		}
		catch( err ) { throw new Error(`Erro ao fazer operação: ${err}`) };
	};
};
