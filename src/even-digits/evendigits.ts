export function hasEvenDigits(n: number): boolean {
  while (n >= 10) {
    if (n % 2 === 1) return false
  }

  if (n % 2 === 0) return true

  return false
}
