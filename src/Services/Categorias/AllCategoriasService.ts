import { getCustomRepository } from 'typeorm';

import { ObjectId } from 'mongodb';

import { CategoriasMongoRepo } from '../../Repositories/CategoriasRepositories';

import { Connections } from '../../Database/Connection';

import { ParsedQs } from 'qs';

export class AllCategoriasService
{
	async execute( ID?: string | string[] | ParsedQs | ParsedQs[] ): Promise< [] | undefined >
	{
		try
		{
			let allPosts: any[any];

			const instaceConnection = new Connections();
		 
			const mongoConnection = await instaceConnection
			.GetConnection('mongo');
		 
			const categoriasMongoRepo = mongoConnection
			.getCustomRepository( CategoriasMongoRepo );
		 
			if( ID )
				allPosts = await categoriasMongoRepo
				.findOne({ id: ObjectId(ID) });
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
