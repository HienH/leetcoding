import { describe, it, expect } from "vitest";
import { orangesRotting } from "./rotting-oranges";

describe("orangesRotting", () => {
  it("solves the example grid", () => {
    const grid = [
      [2, 1, 1],
      [1, 1, 0],
      [0, 1, 1],
    ];
    expect(orangesRotting(grid)).toBe(4);
  });

  it("returns -1 when a fresh orange is unreachable", () => {
    const grid = [
      [2, 1, 1],
      [0, 1, 1],
      [1, 0, 1],
    ];
    expect(orangesRotting(grid)).toBe(-1);
  });

  it("returns 0 when there are no fresh oranges", () => {
    expect(orangesRotting([[0, 2]])).toBe(0);
  });

  it("returns 0 for a grid with only empty cells", () => {
    expect(orangesRotting([[0, 0, 0]])).toBe(0);
  });

  it("returns -1 when there is a fresh orange and no rotten orange", () => {
    expect(orangesRotting([[1]])).toBe(-1);
  });

  it("handles multiple rotten sources spreading at once", () => {
    const grid = [
      [2, 1, 1, 1, 2],
      [1, 1, 1, 1, 1],
    ];
    expect(orangesRotting(grid)).toBe(3);
  });

  it("handles a single rotten orange in a long row", () => {
    expect(orangesRotting([[2, 1, 1, 1, 1]])).toBe(4);
  });
});
