const {isString} = require('../../lib/index.js');

test('isString', () => {
  expect(isString('test')).toBe(true);
});
