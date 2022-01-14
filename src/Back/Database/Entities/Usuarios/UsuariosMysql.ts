import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsuariosMysql
{
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column({ nullable: false })
    nome: string;
 
    @Column({ nullable: false })
    sobrenome: string;
 
    @Column({ nullable: false })
    idade: number;
 
    @Column({ nullable: false })
    email: string;
 
    @Column({ nullable: false })
    senha: string;
 
    @Column()
    pais: string;
};
