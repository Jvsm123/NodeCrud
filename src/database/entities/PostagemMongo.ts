import { Entity, ObjectID, ObjectIdColumn, CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';

@Entity()
export class PostagemMongo
{
    @ObjectIdColumn()
    id: ObjectID;
 
    @Column({ nullable: false })
    titulo: string;

    @Column({ nullable: true })
    slug: string;
 
    @Column({ type: "text" })
    conteudo: string;
 
    @CreateDateColumn()
    createdAt: Date;
 
    @UpdateDateColumn()
    updatedAt: Date;
};
