import { expect, test } from "vitest";
import HelloWorld from ".";
test("Say Hello World when a empty string is supplied", () => {
    expect(HelloWorld("", "English")).toBe("Hello World")

})
test("Test if an argument is passed say Hello to this", () => {
    expect(HelloWorld("Gabriel", "English")).toBe("Hello, Gabriel")
})

test("Test if the language feature is working", () => {
    expect(HelloWorld("Silvia", "French")).toBe("Salut, Silvia")
})