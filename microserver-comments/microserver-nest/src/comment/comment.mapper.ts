import {Injectable} from '@nestjs/common';
import {Comment} from '../domain/comment.entity';
import {CommentDto} from './comment.dto';

@Injectable()
export class CommentMapper {

    mapToComment(commentDTO: CommentDto): Comment {
        const comment = new Comment();
        comment.create(commentDTO.description);
        return comment;
    }

    mapToCommentDTO(comment: Comment): CommentDto {
        return {
            description: comment.description
        } as CommentDto;
    }
}
