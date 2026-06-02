// Rotting Oranges
//
// You are given a 2D grid where each cell is one of:
//   0 = empty cell
//   1 = fresh orange
//   2 = rotten orange
//
// Every minute, any fresh orange that is 4-directionally adjacent
// (up/down/left/right) to a rotten orange becomes rotten.
//
// Return the minimum number of minutes that must elapse until no fresh
// orange remains. If it's impossible (some fresh orange can never rot),
// return -1.
//
// Examples:
//   grid = [
//     [2, 1, 1],
//     [1, 1, 0],
//     [0, 1, 1],
//   ]
//   orangesRotting(grid) -> 4
//
//   grid = [
//     [2, 1, 1],
//     [0, 1, 1],
//     [1, 0, 1],
//   ]
//   orangesRotting(grid) -> -1   // bottom-left fresh orange is isolated
//
//   grid = [[0, 2]]
//   orangesRotting(grid) -> 0    // no fresh oranges, 0 minutes
//
// Constraints:
//   1 <= grid.length, grid[0].length <= 10
//   grid[i][j] is 0, 1, or 2


const MOVEMENTS: [number, number][] = [[1,0],[-1,0],[0,1],[0,-1]]
export function orangesRotting(grid: number[][]): number {

let freshCount =0
const queue: [number, number][] = []
for(let i =0; i< grid.length;i++){
  for(let j=0; j<grid[0]!.length;j++){
    if(grid[i]![j] ===1){freshCount+=1}
    if(grid[i]![j] ===2){queue.push([i,j])}
  }
}

let min = 0
while(queue.length >0 && freshCount>0){

  const layer = queue.length /// snapshot

  for (let k = 0; k < layer; k++) {
    /// rot fuits
      const [i, j] = queue.shift()!
      for(const [ni, nj] of MOVEMENTS){
        // if neighbours is fesh, inbound 
        const newRow = i+ ni
        const newCol = j+nj

        if(newRow >=0 && newRow<grid.length && newCol >=0 && newCol<grid[0]!.length && grid[newRow]![newCol]===1){
          // rot the fruit and push it to the queue 
          grid[newRow]![newCol]=2
          queue.push([newRow, newCol])
          freshCount--
        }
    }
  }
  min++ 
}

  return freshCount>0 ?  -1 : min
}
