import { getCustomRepository } from 'typeorm';

import { CategoriasMongoRepo } from '../../Repositories/CategoriasRepositories';

import { Connections } from '../../Database/Connection';

import { INewData } from '../../Interfaces/Main';

export class NewCategoriasService
{
	async execute( Data: INewData ): Promise< string | undefined >
	{
		try
		{
			const instanceConnection = new Connections();
		 
			const mongoConnection = await instanceConnection
			.GetConnection('mongo');
		 
			const categoriasMongoRepo = mongoConnection
			.getCustomRepository( CategoriasMongoRepo );
		 
			return await categoriasMongoRepo
			.save({ titulo: Data.titulo, slug: Data.slug })
			.then( () => { return "Sucesso ao Salvar!" } );
		}
		catch( err ) { throw new Error( `Erro ao adicionar: ${err}` ) };
	};
};
