import {
	Entity,
	Column,
	ManyToOne,
	JoinColumn,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

import { CategoriasMysql } from '../Categorias/CategoriasMysql.ts'

@Entity()
export class PostagensMysql
{
	@PrimaryGeneratedColumn()
	id: number;
 
	@Column({ nullable false, type: 'text' })
	titulo: string;
 
	@Column({ nullable: false, type: 'text' })
	slug: string;
 
	@Column({ nullable: false, type: 'text '})
	descricao: string;
 
	@Column({ nullable: false, type: 'text' })
	conteudo: string;
 
	@CreateDateColumn()
	created_at: Date;
 
	@UpdateDateColumn()
	updated_at: Date;
 
	@Column({ nullable: false, type: 'text' })
	id_categoria: string;
 
	@JoinColumn({ name: 'id_categoria' })
	@ManyToOne( () => CategoriasMysql )
	categoria: CategoriasMysql;
};
