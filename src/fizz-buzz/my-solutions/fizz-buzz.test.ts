import { describe, it, expect, test, vi } from 'vitest'
import { fizzBuzz, value } from './FizzBuzz'

// Boundaries and Equivalence partitions
// Triangulation Green Bar Pattern
// Test cases (.each())

// Also remember :
// - 4 laws
// - red-green-refactor
// - Fake it Green bar pattern
describe('Feature: create  fn that takes in a natural number and returns a strings', () => {
  describe('Rule 1: if the number is divisible by 3, return Fizz', () => {
    test.each([{ input: 3 }, { input: 6 }, { input: 9 }])(
      'should return fizz, when input is: $input ',
      ({ input }) => {
        //arrange
        const expected = value.fizz
        //act
        const actual = fizzBuzz(input)
        //assert
        expect(actual).toBe(expected)
      }
    )
  })

  describe('Rule 2: if the number is divisible by 5, return Buzz', () => {
    test.each([{ input: 5 }, { input: 10 }, { input: 20 }])(
      'should return Buzz, when input is: $input ',
      ({ input }) => {
        //arrange
        //const input = 5
        //act
        const expected = fizzBuzz(input)
        //assert
        expect(expected).toBe(value.buzz)
      }
    )
  })

  describe('Rule 2: if the number is divisible by 3 and 5, return FizzBuzz', () => {
    test.each([{ input: 15 }, { input: 30 }, { input: 75 }, { input: 0 }])(
      'should return FizzBuzz, when input is: $input ',
      ({ input }) => {
        //arrange
        // const input = 15
        //act
        const expected = fizzBuzz(input)
        //assert
        expect(expected).toBe(value.fizz + '' + value.buzz)
      }
    )
  })

  describe('Rule 3: return number itself if not divisible by 3 and 5', () => {
    test.each([{ input: 1 }, { input: 2 }, { input: 77 }])(
      'should return 1, when input is: $input ',
      ({ input }) => {
        //arrange
        //const input = 1
        //act
        const expected = fizzBuzz(input)
        //assert
        expect(expected).toBe(input.toString())
      }
    )
  })
})
