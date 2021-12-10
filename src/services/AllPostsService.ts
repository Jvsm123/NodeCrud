import { Request } from 'express';

import { getCustomRepository } from 'typeorm';

import { ObjectId } from 'mongodb';

import { PostagemMongoRepo } from '../repositories/PostagensRepositories';

import { Connection } from '../database/Connection';

export class AllPostsService
{
    async execute( ID?: any ): Promise< any[] >
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
    };
};
