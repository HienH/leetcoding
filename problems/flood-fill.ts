// Flood Fill
//
// You are given an `image` (a 2D grid of integers representing pixel colors),
// a starting pixel `(sr, sc)`, and a new color `color`.

// "Flood fill" the image starting from `(sr, sc)`:
//   - Change the color of the starting pixel to `color`.
//   - Then change every pixel that is 4-directionally connected (up, down,
//     left, right) to the starting pixel AND has the same original color
//     as the starting pixel.
//   - Repeat that rule transitively: any pixel connected to an already-
//     filled pixel via same-color pixels also gets filled.
//
// Return the modified image.
//


// Examples:
//   image = [
//     [1, 1, 1],
//     [1, 1, 0],
//     [1, 0, 1],
//   ]
//   sr = 1, sc = 1, color = 2
//   floodFill(image, sr, sc, color) ->
//     [
//       [2, 2, 2],
//       [2, 2, 0],
//       [2, 0, 1],
//     ]
//
//   image = [[0, 0, 0], [0, 0, 0]], sr = 0, sc = 0, color = 0
//   floodFill(image, sr, sc, color) -> [[0, 0, 0], [0, 0, 0]]
//   (no-op: new color equals original color — avoid infinite recursion!)
//
// Constraints:
//   1 <= image.length, image[0].length <= 50
//   0 <= image[i][j], color < 2^16
//   0 <= sr < image.length
//   0 <= sc < image[0].length

export function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  const startcolour = image[sr][sc]

  if(startcolour === color) return image // start is color do nothing 

  const MOVES = [[-1,0],[1,0],[0,-1],[0,1]]

  const helper = (r:number,c:number)=> {
      if(r <0 || r>=image.length || c<0 || c>=image[0].length || image[r][c]!==startcolour ) return
      image[r][c] = color
      //check neighbours 
      for(const [nr, nc] of MOVES){
        helper(r+nr, c+nc)
      }
  }
  // change to color

  helper(sr,sc)
  return image;
}
