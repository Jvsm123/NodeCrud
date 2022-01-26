import { getCustomRepository } from 'typeorm';

import { PostagensRepo } from '../../Repositories/PostsRepositories';

export class DeletePostagensService
{
	async execute( ID: string ): Promise< string >
	{
		try
		{
			const postagemRepo = getCustomRepository( PostagensRepo );

			const result = await postagemRepo.delete( ID );

			if( !result ) return("Essa postagem não existe!");

			return "Deletado com sucesso!";
		}
		catch( err: any )
		{
			throw new Error(`Erro ao deletar: ${err}`);
		}
	};
};
