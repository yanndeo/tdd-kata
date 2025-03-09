import { describe, it, expect, test, vi } from 'vitest'
import { createPowerOfTwo } from './PowerOfTwo'

describe('Feature: Given a list of numbers it should return a new list of numbers that are to the power of 2.', () => {
  test.each([
    { input: [1, 2, 3], expected: [1, 4, 9] },
    { input: [5, 8, 10], expected: [25, 64, 100] },
    { input: [11, 4, 9], expected: [121, 16, 81] }
  ])('given $input should return new list [$expected', ({ input, expected }) => {
    //arrange
    const sut = createPowerOfTwo()

    //act
    const actual = sut.apply(input)
    console.log(actual)
    //assert
    expect(actual).toEqual(expected)
  })
})
