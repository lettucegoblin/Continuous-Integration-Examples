const { add } = require('../../index');
const test = require('tape');
// Tape test
test('add', t => {
  t.equal(add(1, 2), 3);
  t.end();
});