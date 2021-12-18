import { getCustomRepository } from 'typeorm';

import { ObjectId } from 'mongodb';

import { CategoriasMongoRepo } from '../../Repositories/CategoriasRepositories';

import { Connection } from '../../Database/Connection';

import { ParsedQs } from 'qs';

export class AllCategoriasService
{
	async execute( ID?: string | string[] | ParsedQs | ParsedQs[] ): Promise< any[] | undefined >
	{
		try
		{
			let allPosts;
		 
			const instaceConnection = new Connection();
		 
			const mongoConnection = await instaceConnection
			.GetConnection('mongo');
		 
			const categoriasMongoRepo = mongoConnection
			.getCustomRepository( CategoriasMongoRepo );
		 
			if( ID )
				allPosts = await categoriasMongoRepo
				.findOne({ _id: ObjectId(ID) });
			else
				allPosts = await categoriasMongoRepo
				.find();
		 
			return allPosts;
		}
		catch( err )
		{
			throw new Error( `Erro ao listar produtos: ${err}` );
		};
	};
};
