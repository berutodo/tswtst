import {test, expect} from "vitest"
import Repeat from "."
//Do a test that can fail first, then make it pass.
test("Expect that the number be repeated 5 times", () => {
    expect(Repeat("x")).toBe("xxxxx")
})