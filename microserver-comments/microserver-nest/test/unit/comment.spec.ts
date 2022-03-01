import {Comment} from '../../src/domain/comment.entity'

describe('Domain Comment', () => {
    it('description should not be undefined', () => {
        expect(() => new Comment().create(undefined)).toThrowError('description should not be undefined');
    });
});
