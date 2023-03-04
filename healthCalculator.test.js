import calculateHealth from './healthCalculator';

test('should return healthy', () => {
  expect(calculateHealth({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('should return wounded', () => {
  expect(calculateHealth({ name: 'Маг', health: 40 })).toBe('wounded');
});

test('should return critical', () => {
  expect(calculateHealth({ name: 'Маг', health: 10 })).toBe('critical');
});
