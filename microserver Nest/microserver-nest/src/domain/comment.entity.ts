import {Column, Entity, ObjectID, ObjectIdColumn} from 'typeorm';

@Entity('Comment')
export class Comment {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    description: string;

    constructor(description: string) {
        this.description = description;

        if(this.description == undefined) {
            throw Error("description should not be undefined")
        }
    }
}
