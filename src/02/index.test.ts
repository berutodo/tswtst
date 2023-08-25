import { expect, test } from "vitest";
import HelloWorld from ".";
test("Say \"Hello World when a empty string is supplied", () => {
    expect(HelloWorld("")).toBe("Hello World")
})
test("Test if an argument is passed say Hello to this", () => {
    expect(HelloWorld("Gabriel")).toBe("Hello, Gabriel")
})