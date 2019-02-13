import { stringTest } from './string-test';

describe('Helper: stringTest', () => {
  it('should grant access when permission is equal to action', () => {
    expect(stringTest('product:find', 'product:find')).toBe(true);
  });
});
