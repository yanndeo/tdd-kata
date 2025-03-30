interface even {
  apply(input: number[]): number[]
}

export function eventNumbersFilter(): even {
  return {
    apply(input: number[]) {
      const result = input.filter(item => item % 2 === 0)
      console.log('result', result)
      return result
    }
  }
}
