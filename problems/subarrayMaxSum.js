function subarrayMaxSum(nums) {
  let max = nums[0];
  let maxSoFar = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
    maxSoFar = Math.max(nums[i], maxSoFar + nums[i]);
    max = Math.max(max, maxSoFar);
  }
  return max;
}

console.log(subarrayMaxSum([-2, -3, 4, -1, -2, 1, 5, -1]));
