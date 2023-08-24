const { add } = require('../../index');
const assert = require('assert');
// Mocha test
describe('add', () => {
  it('should add two numbers together', () => {
    assert.equal(add(1, 2), 3);
  });
});