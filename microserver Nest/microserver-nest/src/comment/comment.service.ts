import {Injectable} from '@nestjs/common';
import {CommentDto} from './comment.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Comment} from '../domain/comment.entity';
import {CommentMapper} from './comment.mapper';

@Injectable()
export class CommentService {

    constructor(
        @InjectRepository(Comment) private commentRepository: Repository<Comment>,
        private commentMapper: CommentMapper) {
    }

    getComments(): Promise<Comment[]> {
       return this.commentRepository.find();
    }

    createComment(commentDto: CommentDto): Promise<Comment> {
       return this.commentRepository.save(this.commentMapper.mapToComment(commentDto));
    }

    // updateComment(commentDto: CommentDto): Promise<Comment> {
    //     return this.commentRepository.save(this.commentMapper.mapToComment(commentDto));
    // }
    //
    // deleteComment(commentDto: CommentDto): Promise<Comment> {
    //     return this.commentRepository.save(this.commentMapper.mapToComment(commentDto));
    // }
}
