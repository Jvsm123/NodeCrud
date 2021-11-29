import { EntityRepository, Repository } from 'typeorm';
import { PostagemMysql } from '../database/entities/PostagemMysql';
import { PostagemMongo } from '../database/entities/PostagemMongo';

@EntityRepository( PostagemMysql )
export class PostagemMysqlRepo extends Repository< PostagemMysql > { };

@EntityRepository( PostagemMongo)
export class PostagemMongoRepo extends Repository< PostagemMongo > { };
