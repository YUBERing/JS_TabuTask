const removeEqualElemFromArr= require('./3');

const assert = require('assert');

describe('removeEqualElemFromArr 3', () => {
    it('should return a array', () => {
        assert.equal(typeof removeEqualElemFromArr([1,2,3,4,5,6], 3, 5, 2, 1), 'object');
    });

    it('createArrOfUnequalElem([1,2,3,4,5,6], [4,5,6,7,8,9]) should return [1,2,3,7,8,9]', () => {
        assert.deepEqual(removeEqualElemFromArr([1,2,3,4,5,6], 3, 5, 2, 1), [4,6]);
    });
});