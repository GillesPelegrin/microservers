import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Comment} from './domain/comment.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mongodb',
            host: 'localhost',
            port: 27017,
            username: 'root',
            password: 'rootpassword',
            database: '',
            entities: [Comment],
            synchronize: true,
        }),
    ],
})
export class DbModule {
}

