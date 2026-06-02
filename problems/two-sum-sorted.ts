// Two Sum II - Input Array Is Sorted
//
// Given a 1-indexed array of integers `numbers` that is already sorted in
// ascending order, find two numbers such that they add up to a specific
// `target`.
//
// Return the indices of the two numbers (1-indexed, not 0-indexed) as an
// array of length 2: [index1, index2], where 1 <= index1 < index2 <= n.
//
// You may assume that each input has exactly one solution, and you may not
// use the same element twice.
//
// Your solution must use only constant extra space (O(1)).
//
// Examples:
//   numbers = [2, 7, 11, 15], target = 9
//   twoSum(numbers, target) -> [1, 2]
//   (numbers[0] + numbers[1] = 2 + 7 = 9, return 1-indexed: [1, 2])
//
//   numbers = [2, 3, 4], target = 6
//   twoSum(numbers, target) -> [1, 3]
//
//   numbers = [-1, 0], target = -1
//   twoSum(numbers, target) -> [1, 2]
//
// Constraints:
//   2 <= numbers.length <= 30000
//   -1000 <= numbers[i] <= 1000
//   numbers is sorted in non-decreasing order
//   -1000 <= target <= 1000
//   Exactly one solution exists

export function twoSum(numbers: number[], target: number): number[] {

  let left = 0
  let right = numbers.length-1


  while(right > left){
    const sum: number =  numbers[left]+numbers[right]

    if(sum === target) return [left+1, right+1]

    if(sum > target) {
      // move right left
      right --
    }
    if(sum < target) {
      // move right left
      left ++
    }
  }
  return [-1,-1]
 
}


