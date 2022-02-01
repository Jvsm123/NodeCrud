import {
	Entity,
	Column,
	ManyToOne,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

import { Categorias } from './Categorias';

@Entity()
export class Postagens
{
	@PrimaryGeneratedColumn()
	id: number;
 
	@Column()
	titulo: string;
 
	@Column()
	slug: string;
 
	@Column({ nullable: true, type: "text" })
	descricao: string;
 
	@Column({ nullable: true, type: "blob" })
	conteudo?: string | any[any];
 
	@CreateDateColumn()
	created_at: Date;
 
	@UpdateDateColumn()
	updated_at: Date;
 
	@ManyToOne( () => Categorias, category => category.postagens )
	categoria: Categorias;
};
