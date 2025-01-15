function fibonacci(n) {
	if(n < 0) return null;
  if (n === 0) return 0;
  if (n === 1) return 1;
  let total2 = 0, total1 = 1;
  for (let i = 2; i <= n; i++) {
    let temp = total2;
    total2 = total1;
    total1 = total1 + temp;
  }
  return total1;
}
module.exports = {fibonacci}