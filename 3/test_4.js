const findEqualObjectFromArrayObjects = require('./4');

const assert = require('assert');

describe('findEqualObjectFromArrayObjects 4', () => {
    it('should return a array', () => {
        assert.equal(typeof findEqualObjectFromArrayObjects([{ "apple": 1, "bat": 2 }, { "apple": 1 }, 
        { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }), 'object');
    });

    it('findEqualObjectFromArrayObjects([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]', () => {
        assert.deepEqual(findEqualObjectFromArrayObjects([{ "apple": 1, "bat": 2 }, { "apple": 1 }, 
        { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }), [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]);
    });
});