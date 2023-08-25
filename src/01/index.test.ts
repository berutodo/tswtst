import {expect, test} from "vitest"
import sum from "./index.ts"

test("Test if sum of 1 + 2 returns 3", () => {
    expect(sum(1,2)).toBe(3)
})