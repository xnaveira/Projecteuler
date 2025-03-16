import { primeFactors } from "./problem"

describe("primefactors function", () => {
    test("10", () => {
        expect(primeFactors(10)).toEqual([2, 5])
    });
    test("13195", () => {
        expect(primeFactors(13195)).toEqual([5, 7, 13, 29])
    });
});