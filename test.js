const { add } = require('./index');
const assert = require('assert');

// Mocha test
describe('add', () => {
  it('should add two numbers together', () => {
    assert.equal(add(1, 2), 3);
  });
});

// Jest test
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

// Node.js assert test
assert.equal(add(1, 2), 3);
assert.equal(add(-1, 1), 0);
assert.equal(add(0, 0), 0);