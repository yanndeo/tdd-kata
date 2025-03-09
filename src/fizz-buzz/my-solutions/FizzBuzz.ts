export const enum value {
  'fizz' = 'Fizz',
  'buzz' = 'Buzz'
}

export function fizzBuzz(n: number) {
  let result: string = ''

  if (0 === n % 3) {
    result += value.fizz
  }

  if (0 === n % 5) {
    result += value.buzz
  }

  if (0 !== n % 3 && 0 !== n % 5) {
    result = n.toString()
  }

  return result
}
