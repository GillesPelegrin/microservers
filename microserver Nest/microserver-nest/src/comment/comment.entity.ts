import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('article')
export class ArticleEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;
}
