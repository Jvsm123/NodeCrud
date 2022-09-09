import { EntityRepository, Repository } from 'typeorm';

import { Postagens } from '../Database/Entities/Postagens';

@EntityRepository( Postagens )
export class PostagensRepo extends Repository< Postagens > {  };
