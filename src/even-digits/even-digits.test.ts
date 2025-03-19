import { describe, it, expect, test, vi } from 'vitest'
import { addAllNumber } from './addAllNumbers'
import { hasEvenDigits } from './evendigits'

describe('Feature: Even digits', () => {
  /*  describe('Rule 1 : should return true if all the digits of a number are even', () => {
        test.each([
            {input: 2, expected: true},
            {input: 4, expected: true},
            {input: 6, expected: true},
        ])('given $input, should return $expected', ({input, expected}) => {
            //arrange
            //act
            const actual = hasEvenDigits(input)
            //assert
            expect(actual).toBe(expected)
            
        })

        test.each([
            {input: 22, expected: true},
            {input: 88, expected: true},
            {input: 44, expected: true},
        ])('given $input, should return $expected', ({input, expected}) => {
            //arrange
            //act
            const actual = hasEvenDigits(input)
            //assert
            expect(actual).toBe(expected)
        })

        */
  // })

  describe('Rule 2 : should return false if any of the digits of a number are odd', () => {
    test.each([
      { input: 322, expected: false },
      { input: 818, expected: false },
      { input: 454, expected: false },
      { input: 2454, expected: false }
    ])('given $input, should return $expected', ({ input, expected }) => {
      //arrange
      //act
      const actual = hasEvenDigits(input)
      //assert
      expect(actual).toBe(expected)
    })

    it('given 123, should return false', () => {})
  })
})
