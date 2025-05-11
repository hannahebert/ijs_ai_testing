import { add } from './add';

describe('add', () => {
    test('should return the sum of two positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('should return the sum of a positive and a negative number', () => {
        expect(add(5, -3)).toBe(2);
    });

    test('should return the sum of two negative numbers', () => {
        expect(add(-4, -6)).toBe(-10);
    });

    test('should return 0 when both numbers are 0', () => {
        expect(add(0, 0)).toBe(0);
    });

    test('should handle edge cases with large numbers', () => {
        expect(add(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
    });

    test('should throw an error for invalid inputs', () => {
        // @ts-expect-error Testing invalid input
        expect(() => add('a', 3)).toThrow();
        // @ts-expect-error Testing invalid input
        expect(() => add(2, null)).toThrow();
    });
});
