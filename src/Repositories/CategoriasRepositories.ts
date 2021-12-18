import { EntityRepository, Repository } from 'typeorm';
import { CategoriasMysql } from '../Database/Entities/Categorias/CategoriasMysql';
import { CategoriasMongo } from '../Database/Entities/Categorias/CategoriasMongo';

@EntityRepository( CategoriasMysql )
export class CategoriasMysqlRepo extends Repository< CategoriasMysql > { };

@EntityRepository( CategoriasMongo)
export class CategoriasMongoRepo extends Repository< CategoriasMongo > { };
