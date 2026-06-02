// Shortest Path in a Binary Matrix
//
// Given an n x n grid of 0s (open) and 1s (blocked), return the length of
// the shortest "clear path" from the top-left (0,0) to the bottom-right
// (n-1, n-1). A clear path is a sequence of cells such that:
//   - every cell is 0
//   - every consecutive pair of cells is 8-directionally adjacent
//     (up, down, left, right, OR any of the 4 diagonals)
//
// The length of the path is the number of cells visited (NOT the number
// of moves). So a single-cell path has length 1.
//
// Return -1 if no clear path exists.
//
// Examples:
//   grid = [
//     [0, 0, 0],
//     [1, 1, 0],
//     [1, 1, 0],
//   ]
//   shortestPathBinaryMatrix(grid) -> 4
//   (path: (0,0) -> (0,1) -> (1,2) -> (2,2), visiting 4 cells)
//
//   grid = [
//     [0, 1],
//     [1, 0],
//   ]
//   shortestPathBinaryMatrix(grid) -> 2
//   (diagonal move from (0,0) to (1,1))
//
//   grid = [[1, 0], [0, 0]]
//   shortestPathBinaryMatrix(grid) -> -1   // start is blocked
//
// Constraints:
//   1 <= n <= 100
//   grid[i][j] is 0 or 1

export function shortestPathBinaryMatrix(grid: number[][]): number {
  // TODO
  return -1;
}
