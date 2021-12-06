import { Request } from 'express';

import { getCustomRepository } from 'typeorm';

import { PostagemMongoRepo } from '../repositories/PostagensRepositories';

import { Connection } from '../database/Connection';

export class AllPostsService
{
    async execute( id?: Request.ParsedQs ): Promise< any[] >
    {
        console.log( id );
     
        let allPosts;
     
        const connection = new Connection();
     
        const mongoConn = await connection.GetConnection('mongo');
     
        const postsMongoRepo = mongoConn
        .getCustomRepository( PostagemMongoRepo );
     
        if( id )
            allPosts = await postsMongoRepo.findOne( id );
        else
            allPosts = await postsMongoRepo.find();
     
        return allPosts;
    };
};
