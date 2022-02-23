import {Module} from '@nestjs/common';
import {CommentModule} from './comment/comment.module';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRoot(), CommentModule],
})
export class AppModule {
}
