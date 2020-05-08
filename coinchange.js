function coinchange(buffer, array, target, sum, startIndex) {
  if (sum > target) return;
  if (sum === target) {
    console.log(buffer);
    return;
  }
  for (let i = startIndex; i < array.length; i += 1) {
    buffer.push(array[i]);
    coinchange(buffer, array, target, sum + array[i], i);
    buffer.pop();
  }
}

console.log(coinchange([], [1, 2, 5], 5, 0, 0));
