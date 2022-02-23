import {Column, Entity, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity('Comment')
export class Comment {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    description: string;

    constructor(description: string) {
        this.description = description;
    }
}
