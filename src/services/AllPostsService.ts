import { getCustomRepository } from 'typeorm';

import { PostagemMongoRepo } from '../repositories/PostagensRepositories';
import { Connection } from '../database/Connection';

export class AllPostsService
{
    async execute(): Promise<any[]>
    {
        const connection = new Connection();

        console.log(connection);
     
        const mongoConn = await connection.GetConnection('mongo');
     
        const postsMongoRepo = mongoConn
        .getCustomRepository( PostagemMongoRepo );
     
        const allPosts = await postsMongoRepo.find();
     
        return allPosts;
    };
};
