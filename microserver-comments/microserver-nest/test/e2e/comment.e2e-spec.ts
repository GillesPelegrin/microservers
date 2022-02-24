import {Test, TestingModule} from '@nestjs/testing';
import {INestApplication} from '@nestjs/common';
import {AppModule} from '../../src/app.module';
import {CommentTestClient} from '../test-client/comment.test-client';
import {CommentDto} from '../../src/comment/comment.dto';
import {Connection} from 'typeorm';

describe('AppController (e2e)', () => {
    let app: INestApplication;
    let commentTestClient: CommentTestClient;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();

        commentTestClient = new CommentTestClient(app.getHttpServer());

    });

    afterAll(async () => {
        const connection = app.get(Connection)
        await connection.synchronize(true)

        await app.close();
    })

    it('CRUD comments', async () => {

        await commentTestClient.createComment({description: 'some description'} as CommentDto)
        const comments: Comment[] = await commentTestClient.getComments();
        expect(comments).toStrictEqual([{description: 'some description'} as CommentDto]);
    });
});
