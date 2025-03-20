export function checkIsPalindrome(input: number): boolean {
  const output = input.toString().split('').reverse().join('')

  return input === parseInt(output)
}
