import { describe, it, expect } from "vitest";
import { maxSubArray } from "./max-subarray";

describe("maxSubArray", () => {
  it("mixed signs", () => expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6));
  it("single positive", () => expect(maxSubArray([1])).toBe(1));
  it("all positive", () => expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23));
  it("all negative", () => expect(maxSubArray([-3, -2, -5, -1])).toBe(-1));
});
