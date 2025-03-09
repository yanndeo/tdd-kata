import { describe, it, expect, test, vi } from 'vitest'
import { choice, forEach, paperScissorRock } from './paperScissorRock'

describe('Feature: Determine what player won on game: paper - scissor - rock', () => {
  describe('Rule 1: same choice : tie', () => {
    it('should return nothing when player and opponent has same choice ', () => {
      //arrange
      const playerMove = choice.scissor
      const opponentMove = choice.scissor

      //act
      const expected: boolean | null = paperScissorRock(playerMove, opponentMove)

      //assert
      expect(expected).toBeNull()
    })
  })

  describe('Rule 2: paper vs rock: paper win', () => {
    it('should return true when player choose: paper and opponent: rock ', () => {
      //arrange
      const playerMove = choice.paper
      const opponentMove = choice.rock

      //act
      const expected: boolean | null = paperScissorRock(playerMove, opponentMove)

      //assert
      //expect(expected).toBe(true)
      expect(expected).toBeTruthy()
    })
  })

  describe('Rule 3: paper vs scissor: scissor win', () => {
    it('should return false when player choose: paper and opponent: scissor ', () => {
      //arrange
      const playerMove = choice.paper
      const opponentMove = choice.scissor

      //act
      const expected: boolean | null = paperScissorRock(playerMove, opponentMove)

      //assert
      expect(expected).toBe(false)
    })
  })

  describe('Rule 4: rock vs scissor: rock win', () => {
    it('should return true when player choose: rock and opponent: scissor ', () => {
      //arrange
      const playerMove = choice.rock
      const opponentMove = choice.scissor

      //act
      const expected: boolean | null = paperScissorRock(playerMove, opponentMove)

      //assert
      expect(expected).toBe(true)
    })
  })

  describe('Rule 5: rock vs paper: paper win', () => {
    it('should return false when player choose: rock and opponent: paper ', () => {
      //arrange
      const playerMove = choice.rock
      const opponentMove = choice.paper

      //act
      const expected: boolean | null = paperScissorRock(playerMove, opponentMove)

      //assert
      expect(expected).not.toBeTruthy()
    })
  })

  describe('Rule 6: scissor vs paper: scissor win', () => {
    it('should return true when player choose: scissor and opponent: paper ', () => {
      //arrange
      const playerMove = choice.scissor
      const opponentMove = choice.paper

      //act
      const expected: boolean | null = paperScissorRock(playerMove, opponentMove)

      //assert
      expect(expected).toBe(true)
    })
  })

  describe('Rule 7: scissor vs rock: rock win', () => {
    it('should return false when player choose: scissor and opponent: rock ', () => {
      //arrange
      const playerMove = choice.scissor
      const opponentMove = choice.rock

      //act
      const expected: boolean | null = paperScissorRock(playerMove, opponentMove)

      //assert
      expect(expected).toBeFalsy()
    })
  })

  // Note: Fake It Green bar pattern
})
