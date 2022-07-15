import operate from './operate';

describe('operate function tests', () => {
  test('2 +2  should be 4', () => {
    const result = operate(2, 2, '+');
    expect(result).toBe('4');
  });
});
