function soma(a, b) {
  return a + b;
}

test('testar soma', () => {
  const result = soma(1, 2);
  expect(result).toBe(3);
});
