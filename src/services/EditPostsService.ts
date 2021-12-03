import { getCustomRepository } from 'typeorm';

import { PostagemMongoRepo } from '../repositories/PostagensRepositories';

import { Connection } from '../database/Connection';

interface IData
{
    titulo: string;
    slug: string;
    id: string;
};

export class EditPostsService
{
    async execute( data: IData ): Promise< string >
    {
        const connection = new Connection();
     
        const mongoConn = await connection
        .GetConnection( 'mongo' );
     
        const postsMongoRepo = mongoConn
        .getCustomRepository( PostagemMongoRepo );
     
        let newPost = postsMongoRepo
        .findOne({ _id: data.id });
     
        newPost.titulo = data.titulo;
        newPost.slug = data.slug;
     
        return await postsMongoRepo.save( newPost )
        .then( () => { return "alterado com sucesso!" });
    };
};
