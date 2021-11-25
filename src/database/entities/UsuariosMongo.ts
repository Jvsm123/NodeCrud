import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class UsuariosMongo
{
    @ObjectIdColumn()
    id: ObjectID;
 
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
