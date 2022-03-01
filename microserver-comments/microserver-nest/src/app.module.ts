import {Module} from '@nestjs/common';
import {CommentModule} from './comment/comment.module';
import {DbModule} from './db.module';

@Module({
    imports: [DbModule, CommentModule],
})
export class AppModule {
}
