/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

/*Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/
import { describe, it, expect, test, vi, suite } from 'vitest'
import { createTwoSumIndices } from './twoSum'

describe('Feature: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target ', () => {
  test.each([
    { input: [3, 2, 4], target: 6, expected: [1, 2] },
    { input: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { input: [3, 2, 6, 4], target: 6, expected: [1, 3] },
    { input: [10, 1, 88, 94, 6], target: 100, expected: [3, 4] },
    { input: [10, 1, 100, 9, 2], target: 11, expected: [3, 4] },
    { input: [10, -4, 2], target: -2, expected: [1, 2] }
  ])(
    'Given $input and target $target , should return $expected  ',
    ({ input, target, expected }) => {
      //arrange
      //const input = [3,2,4];
      //const target = 6;
      //const expected = [1, 2];
      const sut = createTwoSumIndices()

      //act
      const actual = sut.apply(input, target)

      //assert
      expect(actual).toEqual(expected)
    }
  )

  it('Given input [3, 3], should return empty array', () => {
    //arrange
    const input = [3, 3]
    const expected: number[] = []
    const sut = createTwoSumIndices()

    //act
    const actual = sut.apply(input)
    console.log('actual', actual)

    //assert
    expect(actual).toStrictEqual(expected)
  })
})
