import { describe, it, expect } from "vitest";
import { numIslands } from "./number-of-islands";

describe("numIslands", () => {
  it("counts a single connected island", () => {
    const grid = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];
    expect(numIslands(grid)).toBe(1);
  });

  it("counts three separate islands", () => {
    const grid = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];
    expect(numIslands(grid)).toBe(3);
  });

  it("returns 0 for an all-water grid", () => {
    expect(numIslands([["0", "0"], ["0", "0"]])).toBe(0);
  });

  it("returns 1 for an all-land grid", () => {
    expect(numIslands([["1", "1"], ["1", "1"]])).toBe(1);
  });

  it("returns 0 for a 1x1 water cell", () => {
    expect(numIslands([["0"]])).toBe(0);
  });

  it("returns 1 for a 1x1 land cell", () => {
    expect(numIslands([["1"]])).toBe(1);
  });

  it("counts islands in a checkerboard pattern", () => {
    const grid = [
      ["1", "0", "1"],
      ["0", "1", "0"],
      ["1", "0", "1"],
    ];
    expect(numIslands(grid)).toBe(5);
  });
});
