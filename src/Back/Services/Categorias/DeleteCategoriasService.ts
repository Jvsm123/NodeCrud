import { getCustomRepository } from 'typeorm';

import { CategoriasRepo } from '../../Repositories/CategoriasRepositories';

export class DeleteCategoriasService
{
	async execute( ID: string ): Promise< string | boolean >
	{
		try
		{
			const categoriasRepo = getCustomRepository( CategoriasRepo );

			const result = await categoriasRepo.delete( ID );

			if( !result ) return("Essa categoria não existe!");

			return "Deletado com sucesso!";
		}
		catch( err: any )
		{
			throw new Error( `Erro ao tentar fazer operação: ${err}` );
		};
	};
};
