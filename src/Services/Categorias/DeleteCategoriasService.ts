import { getCustomRepository } from 'typeorm';

import { ObjectId } from 'mongodb';

import { CategoriasMongoRepo } from '../../Repositories/CategoriasRepositories';

import { Connections } from '../../Database/Connection';

export class DeleteCategoriasService
{
	async execute( ID: string ): Promise< string | boolean >
	{
		try
		{
			const instanceConnection = new Connections();
		 
			const mongoConnection = await instanceConnection
			.GetConnection( 'mongo' );
		 
			const categoriasMongoRepo = mongoConnection
			.getCustomRepository( CategoriasMongoRepo );
		 
			const result = await categoriasMongoRepo
			.delete( ID );
		 
			if( !result ) throw new Error( "Erro ao deletar!" );
		 
			return "Deletado com sucesso!";
		}
		catch( err: any )
		{
			throw new Error( `Erro ao tentar fazer operação: ${err}` );
		};
	};
};
