import { fib } from "./problem";

describe("fib function", () => {
    test("negative input", () => {
        expect(() => fib(-1)).toThrow(RangeError)
    });
    test("return one and zero", () => {
        expect(fib(0)).toBe(0);
        expect(fib(1)).toBe(1);
    });
    test("first few numbers", () => {
        expect(fib(2)).toBe(1);
        expect(fib(3)).toBe(2);
        expect(fib(4)).toBe(3);
        expect(fib(5)).toBe(5);
        expect(fib(6)).toBe(8);
        expect(fib(7)).toBe(13);
    })
});