import {
	Entity,
	Column,
	ManyToOne,
	JoinColumn,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

import { CategoriasMysql } from '../Categorias/CategoriasMysql';

@Entity()
export class PostagensMysql
{
	@PrimaryGeneratedColumn()
	id: number;
 
	@Column()
	titulo: string;
 
	@Column()
	slug: string;
 
	@Column()
	descricao: string;
 
	@Column()
	conteudo: string;
 
	@CreateDateColumn()
	created_at: Date;
 
	@UpdateDateColumn()
	updated_at: Date;
 
	@Column()
	id_categoria: string;
 
	@JoinColumn()
	@ManyToOne( () => CategoriasMysql )
	categoria: CategoriasMysql;
};
