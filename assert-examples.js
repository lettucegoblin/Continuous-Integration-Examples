
const { add } = require('./index');

const { expect: expect_chai } = require('chai'); // typically imported as expect
const should = require('should');
const expect_unexpected = require('unexpected'); // typically imported as expect
const power_assert = require('power-assert'); // typically imported as assert
const assert = require('assert');

// Chai test
expect_chai(add(1, 2)).to.equal(3);
console.log('Chai test passed!');

// Should.js test
add(1, 2).should.equal(3);
console.log('Should.js test passed!');

// Unexpected test
expect_unexpected(add(1, 2), 'to equal', 3);
console.log('Unexpected test passed!');

// PowerAssert test
power_assert(add(1, 2) === 3);
console.log('PowerAssert test passed!');

// Node.js assert test
assert.equal(add(1, 2), 3);
console.log('Node.js assert test passed!');

// list of assert libraries used in this example: 
// 