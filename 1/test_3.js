const makeArrayOfLargestNumbers = require('./task_3');

const assert = require('assert');

describe('makeArrayOfLargestNumbers task_3', () => {
    it('should return an array', () => {
        assert.equal(typeof makeArrayOfLargestNumbers([[1, 2, 3], [4, 5], [6, 7, 8, 9]]), 'object');
    });

    it('makeArrayOfLargestNumbers([[1, 2, 3], [4, 5], [6, 7, 8, 9]]) should return [3, 5, 9]', () => {
        assert.deepEqual(makeArrayOfLargestNumbers([[1, 2, 3], [4, 5], [6, 7, 8, 9]]), [3, 5, 9]);
    });
});