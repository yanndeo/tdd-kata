export function createTwoSumIndices() {
  return {
    apply(numbers: number[], target: number = 0): number[] {
      let n = 0
      let indices: number[] = []

      for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
          n = numbers[i] + numbers[j]

          //console.log('n =' , n + ' i:'+numbers[i] + ' j:'+numbers[j])

          if (i !== j && n === target) {
            indices[0] = j
            indices[1] = i
          }
        }
      }

      return indices
    }
  }
}
