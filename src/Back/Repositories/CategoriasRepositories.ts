import { EntityRepository, Repository } from 'typeorm';

import { CategoriasMysql } from '../Database/Entities/Categorias/CategoriasMysql';

@EntityRepository( CategoriasMysql )
export class CategoriasRepo extends Repository< CategoriasMysql > { };
