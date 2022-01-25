import { getCustomRepository } from 'typeorm';

import { CategoriasRepo } from '../../Repositories/CategoriasRepositories';

import { INewData } from '../../Interfaces/Main';

export class NewCategoriasService
{
	async execute( Data: INewData ): Promise< INewData >
	{
		try
		{
			const categoriasRepo = getCustomRepository( CategoriasRepo );
		 
			await categoriasRepo
			.save({ titulo: Data.titulo, slug: Data.slug })

			return Data;
		}
		catch( err ) { throw new Error( `Erro ao adicionar: ${err}` ) };
	};
};
