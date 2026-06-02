// Shortest Path in a Maze
//
// Given a 2D grid of 0s (open) and 1s (walls), return the minimum number of
// steps to go from the top-left (0,0) to the bottom-right (rows-1, cols-1).
// You can move up, down, left, or right (no diagonals). Each move to an
// adjacent cell counts as one step. Return -1 if the destination is
// unreachable. If the start or end cell is a wall, return -1.
//
// Examples:
//   grid = [
//     [0, 0, 1, 0],
//     [1, 0, 1, 0],
//     [0, 0, 0, 0],
//     [0, 1, 1, 0],
//   ]
//   shortestPath(grid) -> 6
//
// Constraints:
//   1 <= grid.length, grid[0].length <= 100
//   grid[i][j] is 0 or 1

export function shortestPath(grid: number[][]): number {

      const DIRECTIONS: [number, number][] = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ];


  const rowSize = grid.length;
  const colSize = grid[0].length;

  if (grid[0][0] === 1 || grid[rowSize - 1][colSize - 1] === 1) return -1;

  const visited = new Set<string>(["0-0"]);
  const queue: [number, number, number][] = [[0, 0, 0]];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current) {
      const [i, j, d] = current;

      if (i === rowSize - 1 && j === colSize - 1) return d!;

  

      for (const [nx, ny] of DIRECTIONS) {
        const newI = i + nx;
        const newJ = j + ny;

        if (
          newI >= 0 &&
          newI < rowSize &&
          newJ < colSize &&
          newJ >= 0 &&
          !visited.has(`${newI}-${newJ}`) &&
          grid[newI][newJ] === 0
        ) {
          visited.add(`${newI}-${newJ}`);

          queue.push([newI, newJ, d + 1]);
        }
      }
    }
  }
  return -1;
}
