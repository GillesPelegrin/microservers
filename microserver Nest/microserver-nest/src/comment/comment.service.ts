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

    async getComments(): Promise<CommentDto[]> {
        const comments: Comment[] = await this.commentRepository.find();
        return comments.map(comment => this.commentMapper.mapToCommentDTO(comment));
    }

    async createComment(commentDto: CommentDto): Promise<CommentDto> {
       const comment: Comment = await this.commentRepository.save(this.commentMapper.mapToComment(commentDto));
        return this.commentMapper.mapToCommentDTO(comment);
    }

    // updateComment(commentDto: CommentDto): Promise<Comment> {
    //     return this.commentRepository.save(this.commentMapper.mapToComment(commentDto));
    // }
    //
    // deleteComment(commentDto: CommentDto): Promise<Comment> {
    //     return this.commentRepository.save(this.commentMapper.mapToComment(commentDto));
    // }
}
