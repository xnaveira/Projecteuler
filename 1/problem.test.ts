import { isMultipleOf } from "./problem"; // Adjust the path based on where your function is defined

describe("isMultipleOf function", () => {
    test("returns true for multiples", () => {
        expect(isMultipleOf(10, 5)).toBe(true);
        expect(isMultipleOf(9, 3)).toBe(true);
        expect(isMultipleOf(15, 5)).toBe(true);
    });

    test("returns false for non-multiples", () => {
        expect(isMultipleOf(10, 3)).toBe(false);
        expect(isMultipleOf(7, 5)).toBe(false);
        expect(isMultipleOf(22, 4)).toBe(false);
    });
});