import { isPrime, isMultipleOf } from "./common";


describe("is multiple of", () => {
    test("is 10 multiple of 5", () => {
        expect(isMultipleOf(10,5)).toBe(true)
    });
    test("is 11 multiple of 5", () => {
        expect(isMultipleOf(11,5)).toBe(false)
    });
});

describe("isPrime", () => {
    test("is 1 prime", () => {
        expect(isPrime(1)).toBe(false)
    });
    test("is 2 prime", () => {
        expect(isPrime(2)).toBe(true)
    });
    test("is 10 prime", () => {
        expect(isPrime(10)).toBe(false)
    });
    test("is 23 prime", () => {
        expect(isPrime(23)).toBe(true)
    });
});