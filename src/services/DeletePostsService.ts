import { getCustomRepository } from 'typeorm';

import { ObjectId, Request } from 'mongodb';

import { PostagemMongoRepo } from '../repositories/PostagensRepositories';

import { Connection } from '../database/Connection';

export class DeletePostsService
{
	async execute( ID: string ): Promise< string | boolean >
	{
		try
		{
			const connection = new Connection();
		 
			const mongoConn = await connection
			.GetConnection( 'mongo' );
		 
			const postsMongoRepo = await mongoConn
			.getCustomRepository( PostagemMongoRepo );
		 
			const result = await postsMongoRepo
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
