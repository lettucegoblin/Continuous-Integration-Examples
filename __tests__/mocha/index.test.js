const { add } = require('../../index');
const assert = require('assert');
// Mocha test
describe('add', () => {
  it('should add two numbers together', () => {
    assert.equal(add(1, 2), 3);
  });
});

/* 
// Example: Chai
// Description: Chai is a popular assertion library that can be paired with Mocha.
const { add } = require('../../index');
const { expect } = require('chai');

// Mocha test with Chai assertions
describe('add', () => {
  it('should add two numbers together', () => {
    expect(add(1, 2)).to.equal(3);
  });
});
*/