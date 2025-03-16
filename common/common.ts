export function isMultipleOf(x: number, y: number): boolean {
    return x % y === 0;
}

export function isPrime(x: number): boolean {
    if (x < 0 ) {
        throw new Error("Only positive numbers")
    }
    if ( x === 1 ) {
        return false
    }
    if ( x === 2 ) {
        return true
    }
    if ( x % 2 === 0 ) {
        return false
    }
    const maxF = Math.round(Math.sqrt(x))
    let div = 3
    while ( div <= maxF ) {
        if ( x % div === 0 ) {
            return false
        }
        div = div + 2
    }
    return true

}