import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity()
export class CategoriasMysql
{
	@PrimaryGeneratedColumn()
	id: number;
 
	@Column({ nullable: false })
	titulo: string;
 
	@Column({ type: 'text' })
	slug: string;
 
	@CreateDateColumn()
	createAt: Date;
 
	@UpdateDateColumn()
	updateAt: Date;
};
