import { EntityRepository, Repository } from 'typeorm';

import { UsuariosMysql } from '../database/entities/UsuariosMysql';

@EntityRepository( UsuariosMysql )
export class UsuariosMysqlRepo extends Repository< UsuariosMysql > { };
