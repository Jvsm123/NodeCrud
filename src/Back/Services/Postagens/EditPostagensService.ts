import { getCustomRepository } from 'typeorm';

import { PostagensRepo } from '../../Repositories/PostsRepositories';

export class EditPostagensService
{
	async execute( data: IEditData, ID: string ): Promise< string >
	{
		try
		{
			const postagemRepo = getCustomRepository( PostagensRepo );

			let postagem = await postagemRepo.findOne({ where: { id: ID } })

			if( postagem )
			{
				data.titulo && (postagem.titulo = data.titulo);

				data.slug && (postagem.slug = data.slug);

				data.conteudo && (postagem.conteudo = data.conteudo);

				data.descricao && (postagem.descricao = data.descricao);

				data.categoria && (postagem.categoria = data.categoria );
			}
			else return "Postagem não encontrada!";

			await postagemRepo.update( ID, postagem );
			
			return "Postagem editada com sucess!";
		}
		catch( err ) { throw new Error(`Erro ao fazer operação: ${err}`) };
	};
};
