import { describe, it, expect } from "vitest";
import { shortestPathBinaryMatrix } from "./binary-matrix-shortest-path";

describe("shortestPathBinaryMatrix", () => {
  it("solves the example with diagonal shortcut", () => {
    const grid = [
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ];
    expect(shortestPathBinaryMatrix(grid)).toBe(4);
  });

  it("uses a single diagonal move on a 2x2", () => {
    const grid = [
      [0, 1],
      [1, 0],
    ];
    expect(shortestPathBinaryMatrix(grid)).toBe(2);
  });

  it("returns 1 for a single open cell", () => {
    expect(shortestPathBinaryMatrix([[0]])).toBe(1);
  });

  it("returns -1 when start is blocked", () => {
    const grid = [
      [1, 0],
      [0, 0],
    ];
    expect(shortestPathBinaryMatrix(grid)).toBe(-1);
  });

  it("returns -1 when end is blocked", () => {
    const grid = [
      [0, 0],
      [0, 1],
    ];
    expect(shortestPathBinaryMatrix(grid)).toBe(-1);
  });

  it("returns -1 when the end is walled off", () => {
    const grid = [
      [0, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ];
    expect(shortestPathBinaryMatrix(grid)).toBe(-1);
  });

  it("walks across an all-open 3x3 using diagonals", () => {
    const grid = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(shortestPathBinaryMatrix(grid)).toBe(3);
  });
});
