// Maximum Average Subarray I
//
// Given an integer array `nums` and an integer `k`, find a contiguous
// subarray of length exactly `k` that has the maximum average value, and
// return that average.
//
// The answer should be a number (a regular JS number is fine — vitest's
// toBeCloseTo will be used for floating-point comparison).
//
// Examples:
//   nums = [1, 12, -5, -6, 50, 3], k = 4
//   findMaxAverage(nums, k) -> 12.75
//   (the subarray [12, -5, -6, 50] has the largest sum 51, avg 51/4 = 12.75)
//
//   nums = [5], k = 1
//   findMaxAverage(nums, k) -> 5.0
//
//   nums = [0, 4, 0, 3, 2], k = 1
//   findMaxAverage(nums, k) -> 4.0
//
// Constraints:
//   1 <= k <= nums.length <= 10000
//   -10000 <= nums[i] <= 10000

export function findMaxAverage(nums: number[], k: number): number {
  // TODO
    let currentSum = 0

    for(let i=0; i<k;i++){
      currentSum+=nums[i]!
    }
    let maxSum = currentSum
    for(let i =k; i< nums.length; i++){
      currentSum = currentSum+ nums[i]-nums[i-k]
      maxSum = Math.max(maxSum, currentSum)
    }
  return maxSum/k;
}
