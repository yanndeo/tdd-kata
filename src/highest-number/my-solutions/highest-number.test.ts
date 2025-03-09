import { describe, it, expect, test, vi } from 'vitest'
import { getHighestNumber } from './highestNumber'

describe('Feature: Given an array of numbers return the highest number', () => {
  test.each([
    { input: [], expected: 0 },
    { input: ['6', 2], expected: 6 },
    { input: [5], expected: 5 },
    { input: ['6', 2], expected: 6 },
    { input: ['-6', 2, 88], expected: 88 },
    { input: ['176', 22, 56, 2505, 77, 52], expected: 2505 },
    { input: ['20', 6, 7, 9, 13, 17], expected: 20 },
    { input: [100, 2, 3, 7, 9], expected: 100 },
    { input: [6, 45, 8, 1, '46', 33], expected: 46 },
    { input: ['18', 5, 4, '33', '32', 6, 32], expected: 33 }
  ])('should return $expected the hightest number of $input', ({ input, expected }) => {
    //arrange
    //const input = ['2', 6];
    const sut = getHighestNumber()
    //const expected = 6;

    //act
    const actual = sut.apply(input)

    //assert
    expect(actual).toBe(expected)
  })
})
