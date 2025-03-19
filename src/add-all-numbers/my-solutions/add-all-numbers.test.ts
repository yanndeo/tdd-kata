import { describe, it, expect, test, vi } from 'vitest'
import { addAllNumber } from './addAllNumbers'

describe('Feature: Given a list of numbers it should get the total by adding them together', () => {
  test.each([
    { input: [1], expected: 1 },
    { input: [1, 2, 3], expected: 6 },
    { input: [5, 8, 10], expected: 23 },
    { input: [11, 4, 9], expected: 24 },
    { input: [5, 5, 5, 5, '2', -5], expected: 17 },
    { input: ['2', '-2'], expected: 0 }
  ])('given $input should return sum $expected', ({ input, expected }) => {
    //arrange
    const sut = addAllNumber()
    //act
    const actual = sut.sum(input)
    //assert
    expect(actual).toBe(expected)
  })
})
