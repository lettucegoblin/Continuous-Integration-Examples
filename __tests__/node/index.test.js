const { add } = require('../../index');
const assert = require('assert');

// Node.js assert test
assert.equal(add(1, 2), 3);
assert.equal(add(-1, 1), 0);
assert.equal(add(0, 0), 0);

console.log('Node.js assert test passed!');