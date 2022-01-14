import {
	Entity,
	ObjectID,
	ObjectIdColumn,
	CreateDateColumn,
	UpdateDateColumn,
	Column
} from 'typeorm';

@Entity()
export class CategoriasMongo
{
	@ObjectIdColumn()
	id: ObjectID;
 
	@Column({ nullable: false })
	titulo: string;
 
	@Column({ nullable: true })
	slug: string;
 
	@CreateDateColumn()
	createdAt: Date;
 
	@UpdateDateColumn()
	updatedAt: Date;
};
