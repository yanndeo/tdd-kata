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
    it('should return Buzz, when input is: 5 ', () => {
      //arrange
      const input = 5
      //act
      const expected = fizzBuzz(input)
      //assert
      expect(expected).toBe(value.buzz)
    })

    it('should return Buzz, when input is: 10 ', () => {
      //arrange
      const input = 10
      //act
      const expected = fizzBuzz(input)
      //assert
      expect(expected).toBe(value.buzz)
    })

    it('should return Buzz, when input is: 20 ', () => {
      //arrange
      const input = 20
      //act
      const expected = fizzBuzz(input)
      //assert
      expect(expected).toBe(value.buzz)
    })
  })

  describe('Rule 2: if the number is divisible by 3 and 5, return FizzBuzz', () => {
    it('should return FizzBuzz, when input is: 15 ', () => {
      //arrange
      const input = 15
      //act
      const expected = fizzBuzz(input)
      //assert
      expect(expected).toBe(value.fizz + '' + value.buzz)
    })

    it('should return FizzBuzz, when input is: 30 ', () => {
      //arrange
      const input = 30
      //act
      const expected = fizzBuzz(input)
      //assert
      expect(expected).toBe(value.fizz + '' + value.buzz)
    })

    it('should return FizzBuzz, when input is: 75 ', () => {
      //arrange
      const input = 75
      //act
      const expected = fizzBuzz(input)
      //assert
      expect(expected).toBe(value.fizz + '' + value.buzz)
    })
  })

  describe('Rule 3: return number itself if not divisible by 3 and 5', () => {
    it('should return 1, when input is: 1 ', () => {
      //arrange
      const input = 1
      //act
      const expected = fizzBuzz(input)
      //assert
      expect(expected).toBe(input.toString())
    })

    it('should return 2, when input is: 2 ', () => {
      //arrange
      const input = 2
      //act
      const expected = fizzBuzz(input)
      //assert
      expect(expected).toBe(input.toString())
    }),
      it('should return 77, when input is: 77 ', () => {
        //arrange
        const input = 77
        //act
        const expected = fizzBuzz(input)
        //assert
        expect(expected).toBe(input.toString())
      })
  })
})
