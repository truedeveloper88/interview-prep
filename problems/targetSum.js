function targetSum(nums, target) {
  let start = 0;
  let end = 0;
  let sum = nums[0];
  while (start <= nums.length - 1) {
    if (start > end) {
      end = start;
      sum = nums[start];
    }
    if (sum < target) {
      if (end === nums.length - 1) {
        break;
      }
      end += 1;
      sum += nums[end];
    } else if (sum > target) {
      sum -= nums[start];
      start += 1;
    } else {
      return [start, end];
    }
  }
  return [-1, -1];
}

console.log(targetSum([5, 3, 1, 7, 6, 4, 2, 3], 14));
