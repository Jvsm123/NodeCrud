import { getCustomRepository } from 'typeorm';

import { CategoriasMongoRepo } from '../../Repositories/CategoriasRepositories';

import { Connection } from '../../Database/Connection';

interface IData
{
    titulo: string;
    slug: string;
};

export class NewCategoriasService
{
	async execute( Data: IData ): Promise< string | undefined >
	{
		try
		{
			const instanceConnection = new Connection();
		 
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
