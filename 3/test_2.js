const createArrOfUnequalElem = require('./2');

const assert = require('assert');

describe('createArrOfUnequalElem 2', () => {
    it('should return a array', () => {
        assert.equal(typeof createArrOfUnequalElem([1,2,3,4,5,6], [4,5,6,7,8,9]), 'object');
    });

    it('createArrOfUnequalElem([1,2,3,4,5,6], [4,5,6,7,8,9]) should return [1,2,3,7,8,9]', () => {
        assert.deepEqual(createArrOfUnequalElem([1,2,3,4,5,6], [4,5,6,7,8,9]), [1,2,3,7,8,9]);
    });
});