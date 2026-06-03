import { describe, it, expect } from "vitest";
import { floodFill } from "./flood-fill";

describe("floodFill", () => {
  it("fills a connected region from the middle", () => {
    const image = [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ];
    expect(floodFill(image, 1, 1, 2)).toEqual([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ]);
  });

  it("does nothing when new color equals original color", () => {
    const image = [
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(floodFill(image, 0, 0, 0)).toEqual([
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  it("only fills the connected region, not disconnected same-color cells", () => {
    const image = [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ];
    expect(floodFill(image, 0, 0, 5)).toEqual([
      [5, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ]);
  });

  it("fills a single-cell image", () => {
    expect(floodFill([[7]], 0, 0, 9)).toEqual([[9]]);
  });

  it("fills the whole image when all cells share the start color", () => {
    const image = [
      [3, 3],
      [3, 3],
    ];
    expect(floodFill(image, 0, 0, 1)).toEqual([
      [1, 1],
      [1, 1],
    ]);
  });

  it("handles a corner start with a snake-shaped region", () => {
    const image = [
      [1, 1, 1, 0],
      [0, 0, 1, 0],
      [1, 1, 1, 0],
    ];
    expect(floodFill(image, 0, 0, 8)).toEqual([
      [8, 8, 8, 0],
      [0, 0, 8, 0],
      [8, 8, 8, 0],
    ]);
  });
});
