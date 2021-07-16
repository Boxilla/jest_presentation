const foo = require('./foo');

test('Description of the test', () => {
  expect(foo(4, 3, 1)).toBe(1);
  expect(foo(4, 0, 1)).toBe(2);
  expect(foo(4, 1, 8)).toBe(8);
  expect(foo(2, 1, 8)).toBe(9);
});