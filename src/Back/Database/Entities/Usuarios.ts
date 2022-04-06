import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuarios
{
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: false })
	nome: string;

	@Column({ nullable: false })
	email: string;

	@Column({ nullable: false })
	senha: string;
};
