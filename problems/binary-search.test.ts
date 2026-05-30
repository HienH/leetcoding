import { describe, it, expect } from "vitest";
import { search } from "./binary-search";

describe("search", () => {
  it("found in middle", () => expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4));
  it("not found", () => expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1));
  it("single element found", () => expect(search([5], 5)).toBe(0));
  it("single element not found", () => expect(search([5], 3)).toBe(-1));
  it("first element", () => expect(search([1, 2, 3, 4, 5], 1)).toBe(0));
  it("last element", () => expect(search([1, 2, 3, 4, 5], 5)).toBe(4));
});
