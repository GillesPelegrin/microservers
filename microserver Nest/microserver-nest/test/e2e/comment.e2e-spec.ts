import {Test, TestingModule} from '@nestjs/testing';
import {INestApplication} from '@nestjs/common';
import * as request from 'supertest';
import {AppModule} from '../../src/app.module';
import {CommentModule} from '../../src/comment/comment.module';
import {CommentTestClient} from '../test-client/comment.test-client';
import {CommentDto} from '../../src/comment/comment.dto';
import {getConnection} from 'typeorm';
import {TypeOrmModule} from '@nestjs/typeorm';

describe('AppController (e2e)', () => {
    let app: INestApplication;
    let commentTestClient: CommentTestClient;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
        commentTestClient = new CommentTestClient(app);

    });

    // afterEach(async () => {
    //     const entities = getConnection().entityMetadatas;
    //     for (const entity of entities) {
    //         const repository = await getConnection().getRepository(entity.name);
    //         await repository.query(`TRUNCATE ${entity.tableName} RESTART IDENTITY CASCADE;`);
    //     }
    // });

    // afterAll(async () => {
    //     app.close();
    // })

    it('CRUD comments', async () => {
        await commentTestClient.createComment({description: 'some description'} as CommentDto)
        const comments = await commentTestClient.getComments();
        expect(comments).toBe({description: 'some description'} as CommentDto);
    });
});
