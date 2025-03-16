// The prime factors of  are  and .

import { isPrime } from "../common/common"

// What is the largest prime factor of the number ?

const x = 600851475143

export function primeFactors(x: number) {
    let factors: Array<number> = []
    const maxF = Math.round(Math.sqrt(x))
    let div = 2
    while ( div <= maxF ) {
        if ( x % div === 0 ) {
            if ( isPrime(div) ) {
                factors.push(div)
            }
            if ( x / div !== x % div ) {
                if ( isPrime(x / div)) {
                    factors.push( x / div )
                }
            }
        }
        div = div + 1
    }
    return factors
}

let res = primeFactors(x)

console.log(`The ${x} biggest prime is: ${Math.max(...res)}`)