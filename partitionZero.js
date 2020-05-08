function partitionZero(nums) {
  let boundary = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== 0) {
      swap(i, boundary, nums);
      boundary += 1;
    }
  }
  return nums;
}

function swap(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]];
}

console.log(partitionZero([1, 2, 0, 4, 3, 0, 4, 5, 6, 0]));
