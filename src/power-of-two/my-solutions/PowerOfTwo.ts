interface powerOfTwo {
  apply(n: number[]): number[]
}

export function createPowerOfTwo(): powerOfTwo {
  return {
    apply: function (list: number[]): number[] {
      return list.map(n => n * n)
    }
  }
}
