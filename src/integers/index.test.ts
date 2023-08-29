import {test, expect} from "vitest"
import Add from ".";

test('should return the sum of 2 numbers', () => {
    expect(Add(1,2)).toBe(3)
});