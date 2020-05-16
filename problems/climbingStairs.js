function climbingStairs(n) {
  if (n < 0) return 0;
  if (n === 0) return 1;
  return climbingStairs(n - 1) + climbingStairs(n - 3) + climbingStairs(n - 5);
}

console.log(climbingStairs(8));
