import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CommentService} from './comment.service';
import {CommentDto} from './comment.dto';
import {Comment} from '../domain/comment.entity';

@Controller()
export class CommentController {

  constructor(private readonly commentService: CommentService) {}

  @Get('/comments')
  getAllComments(): Promise<CommentDto[]> {
    return this.commentService.getComments();
  }

  @Post('/comments')
  createComment(@Body() commentDTO: CommentDto): Promise<CommentDto> {
    return this.commentService.createComment(commentDTO);
  }

  @Put('/comments/:commentId')
  updateComment(@Param('commentId') commentId: string,
                @Body() commentDTO: CommentDto): string {
    return "response"
  }

  @Delete('/comments/:commentId')
  deleteComment(@Param('commentId') commentId: string): string {
    return "response"
  }
}
