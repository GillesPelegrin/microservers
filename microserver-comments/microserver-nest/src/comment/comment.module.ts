import { Module } from '@nestjs/common';
import {CommentController} from './comment.controller';
import {CommentService} from './comment.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CommentMapper} from './comment.mapper';
import {Comment} from '../domain/comment.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Comment])],
    controllers: [CommentController],
    providers: [CommentService, CommentMapper],
})
export class CommentModule {}
