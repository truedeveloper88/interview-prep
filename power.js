function power(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n % 2 === 0)
    return power(x, Math.floor(n / 2)) * power(x, Math.floor(n / 2));
  else {
    return x * power(x, Math.floor(n / 2)) * power(x, Math.floor(n / 2));
  }
}

console.log(power(3, 10));
