import { describe, expect, test } from '@jest/globals';
//@ts-ignore
import { soma } from '../../../soma';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(soma(1, 2)).toBe(3);
  });
});