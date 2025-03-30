import { describe, it, expect, test, vi } from 'vitest'
import { eventNumbersFilter } from './filter-even-numbers'

describe('Feature: Filter even numbers. Given an array of numbers it should filter the even numbers.', () => {
  test.each([
    { input: [2, 6, 3], expected: [2, 6] },
    { input: [1, 8, 9], expected: [8] },
    { input: [13, 18, 22, 5], expected: [18, 22] }
  ])(
    'Given an array of numbers $input it should filter the even numbers',
    ({ input, expected }) => {
      //arrange
      //act
      const sut = eventNumbersFilter()
      const actual = sut.apply(input)
      //assert
      expect(actual).toEqual(expected)
    }
  )
})
