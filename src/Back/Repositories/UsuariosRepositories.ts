import { EntityRepository, Repository } from 'typeorm';

import { Usuarios } from '../database/entities/Usuarios';

@EntityRepository( Usuarios )
export class UsuariosMysqlRepo extends Repository< Usuarios > { };
