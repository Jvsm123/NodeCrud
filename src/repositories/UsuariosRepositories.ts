import { EntityRepository, Repository } from 'typeorm';
import { UsuariosMysql } from '../database/entities/UsuariosMysql';
import { UsuariosMongo } from '../database/entities/UsuariosMongo';

@EntityRepository( UsuariosMysql )
export class UsuariosMysqlRepo extends Repository< UsuariosMysql > { };

@EntityRepository( UsuariosMongo )
export class UsuariosMongoRepo extends Repository< UsuariosMongo > { };
