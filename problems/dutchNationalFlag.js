function dutchNationalFlag(nums, target) {
  let smaller = 0;
  let larger = nums.length - 1;
  let unprocessed = 0;
  while (unprocessed <= larger) {
    if (nums[unprocessed] > target) {
      swap(larger, unprocessed, nums);
      larger -= 1;
    } else if (nums[unprocessed] < target) {
      swap(smaller, unprocessed, nums);
      smaller += 1;
      unprocessed += 1;
    } else {
      unprocessed += 1;
    }
  }
  return nums;
}

function swap(i, j, nums) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}

console.log(dutchNationalFlag([5, 2, 4, 4, 6, 4, 4, 3], 4));
