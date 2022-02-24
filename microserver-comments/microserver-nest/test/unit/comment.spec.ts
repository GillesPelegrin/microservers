import {Comment} from '../../src/domain/comment.entity'

describe('Domain Comment', () => {
    it('description should not be undefined', () => {
        expect(() => new Comment(undefined)).toThrowError('description should not be undefined');
    });
});
