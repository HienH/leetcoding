import { describe, it, expect } from "vitest";
import { findMaxAverage } from "./max-average-subarray";

describe("findMaxAverage", () => {
  it("solves the example", () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBeCloseTo(12.75);
  });

  it("returns the only element when array length equals k", () => {
    expect(findMaxAverage([5], 1)).toBeCloseTo(5);
  });

  it("picks the largest single element when k=1", () => {
    expect(findMaxAverage([0, 4, 0, 3, 2], 1)).toBeCloseTo(4);
  });

  it("handles all negative numbers", () => {
    expect(findMaxAverage([-1, -2, -3, -4], 2)).toBeCloseTo(-1.5);
  });

  it("handles k equal to array length", () => {
    expect(findMaxAverage([1, 2, 3, 4], 4)).toBeCloseTo(2.5);
  });

  it("handles a window at the end of the array", () => {
    expect(findMaxAverage([1, 1, 1, 1, 100], 1)).toBeCloseTo(100);
  });
});
