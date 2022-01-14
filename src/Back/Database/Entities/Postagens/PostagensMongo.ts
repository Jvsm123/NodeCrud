import {
	Column,
	Entity,
	ObjectID,
	ObjectIdColumn,
	CreateDateColumn,
	UpdateDateColumn
}

import { CategoriasMongo } from '../Categorias/CategoriasMongo'

@Entity()
export class PostagensMongo
{
	@ObjectIdColumn()
	id: ObjectID;
 
	@Column({ nullable: false, type: 'text' })
	titulo: string;
 
	@Column({ nullable: false, type: 'text' })
	slug: string;
 
	@Column({ nullable: false, type: 'text' })
	descricao: string;
 
	@Column({ nullable: false, type: 'text' })
	conteudo: string;
 
	@CreateDateColumn()
	created_at: Date;
 
	@UpdateDateColumn()
	update_at: Date;
 
	@Column()
	@ObjectIdColumn()
	categoria: CategoriasMongo.id;
};
