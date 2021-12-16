import { getCustomRepository } from 'typeorm';

import { PostagemMongoRepo } from '../repositories/PostagensRepositories';

import { Connection } from '../database/Connection';

interface IData
{
    titulo: string;
    slug: string;
};

export class NewPostsService
{
	async execute( Data: IData ): Promise< string | undefined >
	{
		try
		{
			const connection = new Connection();
		 
			const mongoConn = await connection.GetConnection('mongo');
		 
			const postsMongoRepo = mongoConn
			.getCustomRepository( PostagemMongoRepo );
		 
			return await postsMongoRepo.save({ titulo: Data.titulo, slug: Data.slug })
			.then( () => { return "Sucesso ao Salvar!" } );
		}
		catch( err ) { throw new Error( `Erro ao adicionar: ${err}` ) };
	};
};
