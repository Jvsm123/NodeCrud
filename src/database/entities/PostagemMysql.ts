import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class PostagemMysql
{
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column({ nullable: false })
    titulo: string;

    @Column({ type: 'text' })
    slug: string;
 
    @Column({ type: 'text' })
    conteudo: string;
 
    @CreateDateColumn()
    createAt: Date;
 
    @UpdateDateColumn()
    updateAt: Date;
};
