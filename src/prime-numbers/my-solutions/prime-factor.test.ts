import { describe, it, expect, test } from 'vitest'
import { primeFactors } from './primeFactors'

describe('Feature: Return array of primer factor for input n=10', () => {
  describe('Rule 1: Input should be a positive integer greater than 1', () => {
    it('should allow only positive integers greater than 1', () => {
      expect(() => {
        primeFactors(-10)
      }).toThrow('You must provide number greater than 1')
      expect(() => {
        primeFactors(0)
      }).toThrow('You must provide number greater than 1')
    })
  })

  describe('Rule 2: Output should decompose n to list of integer', () => {
    test('return array of integer between 1 to n -1', () => {
      expect(primeFactors(10)).toEqual(expect.arrayContaining([expect.any(Number)]))
    })
  })

  /*   describe("Rule 3: Output should only contain prime numbers", () => {
        test("return only prime numbers", () => {
            expect(primeFactors(10)).toEqual([2, 5]);
        });
    }); */

  describe('Rule 4: Output should be an array of factors of n', () => {
    test('return an array of integers that multiply product equals n', () => {})
  })
})
/**
 * exclude pair
 *
 *
 */

//----Example Mapping

//scenario: return primer factor for input n
//example: 10

//rule1: input should be a number between 1 and i++: positive integer
//example: [i, i++]

//rule2: output should be an array of positive integer limited to 1 and n -1
//example: [1, 2, 3, 4, 5, 6, 7, 8, 9]

//rule3: output should be an array of prime numbers: positive integer limited to 1 and n -1
//example: [2, 3, 5, 7]

//rule4: output of primer number should be factors of n
//example: 10 = 2 * 5 = [2, 5]
