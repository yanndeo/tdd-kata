// Source: https://www.codewars.com/kata/54d512e62a5e54c96200019e

export function primeFactors(n: number) {
  if (n < 1) {
    throw new Error('You must provide number greater than 1')
  }

  // n = 8

  const primes = new Array<boolean>(n + 1)

  primes.fill(true)

  primes[0] = false
  primes[1] = false

  console.log(primes)

  //console.log('isPrime', isPrime(77))
  const result = []

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (true === primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false
      }
    }
  }

  for (let k = 2; k <= n; k++) {
    if (true === primes[k]) {
      result.push(k)
    }
  }

  console.log('res', result)
  return result
}

/*
Un nombre entier supérieur à 1 est appelé un Nombre premier s’il ne peut être divisé sans reste par rien d’autre que 1 et lui-même.
Par exemple, 5 est un nombre premier, car il ne peut pas être divisé sans reste par 2, 3 et 4.

*/

function isPrime(n: number) {
  if (n < 0) {
    throw new Error('You must provide number greater than 1')
  }

  if (n == 1 || n % 2 === 0) {
    return false
  }

  for (let i = 3; i < Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}
