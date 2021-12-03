import { getCustomRepository } from 'typeorm';

import { PostagemMongoRepo } from '../repositories/PostagensRepositories';

import { Connection } from '../database/Connection';

interface IData
{
    nome: string;
    slug: string;
};

export class NewPostsService
{
    async execute( { nome, slug }: IData ): Promise< string >
    {
        const connection = new Connection();
     
        const mongoConn = await connection.GetConnection('mongo');
     
        const postsMongoRepo = mongoConn
        .getCustomRepository( PostagemMongoRepo );
     
        return await postsMongoRepo.save(
        {
            titulo: nome,
            slug: slug
        }).then( () => { return "Sucesso ao Salvar!" } );
    };
};
