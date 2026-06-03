// Number of Islands
//
// Given an m x n 2D grid of '1's (land) and '0's (water), return the
// number of distinct islands.
//
// An island is a group of '1's connected 4-directionally (up, down, left,
// right). You may assume all four edges of the grid are surrounded by
// water (so you don't have to wrap around).
//
// Examples:
//   grid = [
//     ['1','1','1','1','0'],
//     ['1','1','0','1','0'],
//     ['1','1','0','0','0'],
//     ['0','0','0','0','0'],
//   ]
//   numIslands(grid) -> 1
//
//   grid = [
//     ['1','1','0','0','0'],
//     ['1','1','0','0','0'],
//     ['0','0','1','0','0'],
//     ['0','0','0','1','1'],
//   ]
//   numIslands(grid) -> 3
//
// Note: the cells are strings ('1' / '0'), not numbers.
//
// Constraints:
//   1 <= grid.length, grid[0].length <= 300
//   grid[i][j] is '0' or '1'

export function numIslands(grid: string[][]): number {
  // TODO
  let count = 0
  const move = [[1,0],[-1,0],[0,1],[0,-1]]

  const checkNeighbours= (i,j)=> {
    for(const [mr,mc] of move){
      const newRow = i+mr
      const newCol = j+mc

      if(newRow >=0 && newRow< grid.length && newCol>=0 && newCol <grid[0].length && grid[newRow][newCol] ==="1"){
        grid[newRow][newCol]="0"
        checkNeighbours(newRow, newCol)
      }
    }
  }
 
  for(let i=0; i<grid.length; i++){
    for(let j = 0; j<grid[0].length; j++){
      if(grid[i][j]==="1"){ // an island
        count +=1
        grid[i][j]="0"
        checkNeighbours(i,j)
      }
    }
  }
  return count;
}
