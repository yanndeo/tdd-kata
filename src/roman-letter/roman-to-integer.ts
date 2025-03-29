interface convert {
  apply(n: string): number
}

type RomanSymbol = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M'

export function convertRomanToInteger(): convert {
  const mapping: Record<RomanSymbol, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  return {
    apply: function (input: string): number {
      let value = 0
      const data: string[] = input.split('')

      for (let item = 0; item < data.length; item++) {
        let v1: number = mapping[data[item] as RomanSymbol]
        let v2: number = mapping[data[item + 1] as RomanSymbol]

        if (v1 < v2) {
          value -= mapping[data[item] as RomanSymbol]
        } else {
          value += mapping[data[item] as RomanSymbol]
        }
      }

      return value
    }
  }
}
