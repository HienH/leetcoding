import { describe, it, expect } from "vitest";
import { reverseList, fromArray, toArray } from "./reverse-linked-list";

describe("reverseList", () => {
  it("reverses 1->2->3->4->5", () => {
    expect(toArray(reverseList(fromArray([1, 2, 3, 4, 5])))).toEqual([5, 4, 3, 2, 1]);
  });
  it("reverses 1->2", () => {
    expect(toArray(reverseList(fromArray([1, 2])))).toEqual([2, 1]);
  });
  it("handles empty list", () => {
    expect(toArray(reverseList(null))).toEqual([]);
  });
  it("handles single node", () => {
    expect(toArray(reverseList(fromArray([1])))).toEqual([1]);
  });
});
