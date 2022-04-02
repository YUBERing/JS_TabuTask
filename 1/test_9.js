const makeDoubleArrayFromArray = require('./task_9');

const assert = require('assert');

describe('makeDoubleArrayFromArray task_9', () => {
    it('should return a array', () => {
        assert.equal(typeof makeDoubleArrayFromArray([1,2,3,4,5,6,7,8,9,0], 3), 'object');
    });

    it('makeDoubleArrayFromArray([1,2,3,4,5,6,7,8,9,0], 3) should return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]]', () => {
        assert.deepEqual(makeDoubleArrayFromArray([1,2,3,4,5,6,7,8,9,0], 3), [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]]);
    });
});