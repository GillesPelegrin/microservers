import {Injectable} from '@nestjs/common';
import {Comment} from '../domain/comment.entity';
import {CommentDto} from './comment.dto';

@Injectable()
export class CommentMapper {

    mapToComment(commentDTO: CommentDto): Comment {
        return new Comment(commentDTO.description);
    }

    mapToCommentDTO(comment: Comment): CommentDto {
        return {
            description: comment.description
        } as CommentDto;
    }
}
