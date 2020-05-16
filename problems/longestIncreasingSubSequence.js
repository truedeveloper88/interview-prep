function longestIncreasingSubSequence(s) {
  if (s === null || !Array.isArray(s) || s.length === 0) {
    return null;
  }
  let result = 1;
  const longest = new Array(s.length).fill(0);
  for (let i = 0; i < s.length; i += 1) {
    longest[i] = 1;
    for (let j = 0; j < i; j += 1) {
      if (s[j] < s[i]) {
        longest[i] = Math.max(longest[i], longest[j] + 1);
      }
    }
    result = Math.max(result, longest[i]);
  }
  return result;
}

console.log(longestIncreasingSubSequence([1, 3, 2, 4, 3, 2, 6, 5, 4]));
