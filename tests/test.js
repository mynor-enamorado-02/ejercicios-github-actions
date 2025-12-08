const { sumArray, averageArray } = require('../src/index');

describe('Array Operations', () => {
  test('should sum array correctly', () => {
    expect(sumArray([1, 2, 3])).toBe(6);
    expect(sumArray([10, 20, 30])).toBe(60);
    expect(sumArray([])).toBe(0);
  });

  test('should calculate average correctly', () => {
    expect(averageArray([1, 2, 3, 4, 5])).toBe(3);
    expect(averageArray([10, 20])).toBe(15);
    expect(averageArray([5])).toBe(5);
  });

  test('edge cases', () => {
    expect(sumArray([-1, 0, 1])).toBe(0);
    expect(averageArray([-10, 0, 10])).toBe(0);
  });
});