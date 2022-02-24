import { Module } from '@nestjs/common';
import {CommentController} from './comment.controller';
import {CommentService} from './comment.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Comment} from '../../dist/domain/comment.entity'
import {CommentMapper} from './comment.mapper';

@Module({
    imports: [TypeOrmModule.forFeature([Comment])],
    controllers: [CommentController],
    providers: [CommentService, CommentMapper],
})
export class CommentModule {}
