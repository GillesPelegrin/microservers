import {CommentDto} from '../../src/comment/comment.dto';
import TestClient from '../test-client';


export class CommentTestClient extends TestClient {

    constructor(app: any) {
        super(app);
    }

    public createComment(commentDTO: CommentDto): Promise<Comment> {
        return this.post<Comment>('/comments', commentDTO);
    }

    public getComments(): Promise<Comment[]> {
        return this.getWithAuthentication<Comment>('/comments')
    }
}
