import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

import { Postagens } from './Postagens';

@Entity()
export class Categorias
{
	@PrimaryGeneratedColumn()
	id: number;
 
	@Column()
	titulo: string;
 
	@Column()
	slug: string;
 
	@CreateDateColumn()
	created_at: Date;
 
	@UpdateDateColumn()
	updated_at: Date;

	@OneToMany( () => Postagens, post => post.categoria )
	postagens: Postagens[];
};
