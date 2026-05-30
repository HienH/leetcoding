import { describe, it, expect } from "vitest";
import { isValid } from "./valid-parentheses";

describe("isValid", () => {
  it("()", () => expect(isValid("()")).toBe(true));
  it("()[]{}", () => expect(isValid("()[]{}")).toBe(true));
  it("(]", () => expect(isValid("(]")).toBe(false));
  it("([)]", () => expect(isValid("([)]")).toBe(false));
  it("{[]}", () => expect(isValid("{[]}")).toBe(true));
  it("empty-ish single char", () => expect(isValid("(")).toBe(false));
});
