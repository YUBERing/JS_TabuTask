const trimStrToLength = require('./task_4');

const assert = require('assert');

describe('trimStrToLength task_4', () => {
    it('should return a string', () => {
        assert.equal(typeof trimStrToLength('Hello world!', 6), 'string');
    });

    it('trimStrToLength("Hello world!", 6) should return "Hello ..."', () => {
        assert.equal(trimStrToLength('Hello world!', 6),  'Hello ...') ;
    });

    it('trimStrToLength("Hello world!", 15) should return "Hello world!"', () => {
        assert.equal(trimStrToLength('Hello world!', 15), 'Hello world!');
    });
});
