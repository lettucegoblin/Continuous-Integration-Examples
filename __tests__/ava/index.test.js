const { add } = require('../../index');
const test = require('ava'); 

// Ava test
test('add', t => {
  t.is(add(1, 2), 3);
});