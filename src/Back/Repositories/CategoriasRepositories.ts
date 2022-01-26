import { EntityRepository, Repository } from 'typeorm';

import { Categorias } from '../Database/Entities/Categorias';

@EntityRepository( Categorias )
export class CategoriasRepo extends Repository< Categorias > { };
