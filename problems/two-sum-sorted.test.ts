import { describe, it, expect } from "vitest";
import { twoSum } from "./two-sum-sorted";

describe("twoSum (sorted)", () => {
  it("solves the basic example", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });

  it("finds a pair at the ends of the array", () => {
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
  });

  it("handles negative numbers", () => {
    expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
  });

  it("handles a pair in the middle of a large array", () => {
    expect(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)).toEqual([1, 10]);
  });

  it("works when duplicates exist", () => {
    expect(twoSum([0, 0, 3, 4], 0)).toEqual([1, 2]);
  });

  it("finds an adjacent pair", () => {
    expect(twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8)).toEqual([4, 5]);
  });
});
