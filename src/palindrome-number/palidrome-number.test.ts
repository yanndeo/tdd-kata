import { describe, it, expect, test, vi } from 'vitest'
import { checkIsPalindrome } from './PalindromeNumber'

describe('Feature: Palindrome number. Given an integer x, return true if x is a palindrome, and false otherwise', () => {
  test.each([
    { input: 121, expected: true },
    { input: -121, expected: false },
    { input: 10, expected: false },
    { input: 696, expected: true }
  ])('should return $expected, given $input', ({ input, expected }) => {
    //arrange
    const actual = checkIsPalindrome(input)
    //act
    console.log('actual', actual)
    //assert
    expect(actual).toBe(expected)
  })

  describe('learning test', () => {
    test('should return true, given 121', () => {
      expect('121'.split('').reverse().join('')).toBe('121')
    })
  })
})
