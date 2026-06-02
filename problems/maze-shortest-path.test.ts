import { describe, it, expect } from "vitest";
import { shortestPath } from "./maze-shortest-path";

describe("shortestPath", () => {
  it("solves the example maze", () => {
    const grid = [
      [0, 0, 1, 0],
      [1, 0, 1, 0],
      [0, 0, 0, 0],
      [0, 1, 1, 0],
    ];
    expect(shortestPath(grid)).toBe(6);
  });

  it("returns 0 for a single open cell", () => {
    expect(shortestPath([[0]])).toBe(0);
  });

  it("returns -1 when start is a wall", () => {
    expect(
      shortestPath([
        [1, 0],
        [0, 0],
      ]),
    ).toBe(-1);
  });

  it("returns -1 when end is a wall", () => {
    expect(
      shortestPath([
        [0, 0],
        [0, 1],
      ]),
    ).toBe(-1);
  });

  it("returns -1 when the end is walled off", () => {
    expect(
      shortestPath([
        [0, 1, 0],
        [1, 1, 0],
        [0, 0, 0],
      ]),
    ).toBe(-1);
  });

  it("walks a straight row", () => {
    expect(shortestPath([[0, 0, 0, 0]])).toBe(3);
  });

  it("routes around a single wall", () => {
    const grid = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    expect(shortestPath(grid)).toBe(4);
  });
});
