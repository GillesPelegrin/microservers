import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CommentService} from './comment.service';
import {CommentDto} from './comment.dto';

@Controller()
export class CommentController {

  constructor(private readonly commentService: CommentService) {}

  @Get('/comments')
  getAllComments(): string {
    return this.commentService.getHello();
  }

  @Post('/comments')
  createComment(@Body('comment') commentDTO: CommentDto): string {
    return this.commentService.getHello();
  }

  @Put('/comments/:commentId')
  updateComment(@Param('commentId') commentId: string,
                @Body('comment') commentDTO: CommentDto): string {
    return this.commentService.getHello();
  }

  @Delete('/comments/:commentId')
  deleteComment(@Param('commentId') commentId: string): string {
    return this.commentService.getHello();
  }
}
