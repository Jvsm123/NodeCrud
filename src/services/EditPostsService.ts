import { getCustomRepository } from 'typeorm';

import { ObjectId } from 'mongodb';

import { PostagemMongoRepo } from '../repositories/PostagensRepositories';

import { Connection } from '../database/Connection';

interface IData
{
    titulo: string;
    newTitulo: string;
    slug: string;
    newSlug: string;
};

export class EditPostsService
{
	async execute( data: IData, ID: string ): Promise< string | undefined >
	{
		try
		{
			const connection = new Connection();
		 
			const mongoConn = await connection
			.GetConnection( 'mongo' );
		 
			const postsMongoRepo = await mongoConn
			.getCustomRepository( PostagemMongoRepo );
		 
			let newPost = await postsMongoRepo
			.findOne({ _id: ObjectId(ID) });
		 
			newPost.titulo = (data.titulo === data.newTitulo) ? data.titulo : data.newTitulo;
			newPost.slug = (data.slug === data.newSlug) ? data.slug : data.newSlug;
		 
			return await postsMongoRepo.update( ID, newPost )
			.then( () => { return "alterado com sucesso!" } );
		}
		catch( err ) { throw new Error( `Erro ao editar: ${err}` ) };
	};
};
