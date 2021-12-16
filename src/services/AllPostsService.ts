import { getCustomRepository } from 'typeorm';

import { ObjectId } from 'mongodb';

import { PostagemMongoRepo } from '../repositories/PostagensRepositories';

import { Connection } from '../database/Connection';

import { ParsedQs } from 'qs';

export class AllPostsService
{
	async execute( ID?: string | string[] | ParsedQs | ParsedQs[] ): Promise< any[] | undefined >
	{
		try
		{
			let allPosts;
		 
			const connection = new Connection();
		 
			const mongoConn = await connection.GetConnection('mongo');
		 
			const postsMongoRepo = mongoConn
			.getCustomRepository( PostagemMongoRepo );
		 
			if( ID )
				allPosts = await postsMongoRepo.findOne({ _id: ObjectId(ID) });
			else
				allPosts = await postsMongoRepo.find();
		 
			return allPosts;
		}
		catch( err )
		{
			throw new Error( `Erro ao listar produtos: ${err}` );
		};
	};
};
