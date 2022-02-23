import {INestApplication} from '@nestjs/common';
import {CommentDto} from '../../src/comment/comment.dto';
import TestClient from '../test-client';


export class CommentTestClient extends TestClient {

    constructor(app: INestApplication) {
        super(app);
    }

    public createComment(commentDTO: CommentDto): Promise<Comment> {
        return this.post<Comment>('/comments', commentDTO);
    }

    public getComments(): Promise<Comment[]> {
        return this.getWithAuthentication<Comment>('/comments')
    }
}
