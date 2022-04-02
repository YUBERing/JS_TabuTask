const makeArrayOfUniqueValue = require('./8');

const assert = require('assert');

describe('makeArrayOfUniqueValue 8', () => {
    it('should return a array', () => {
        assert.equal(typeof makeArrayOfUniqueValue([1,2,3,4],[4,5,6,7], [7,8,9]), 'object');
    });

    it('makeArrayOfUniqueValue([1,2,3,4],[4,5,6,7], [7,8,9]) should return [1,2,3,5,6,8,9]', () => {
        assert.deepEqual(makeArrayOfUniqueValue([1,2,3,4],[4,5,6,7], [7,8,9]), [1,2,3,4,5,6,7,8,9]);
    });
});