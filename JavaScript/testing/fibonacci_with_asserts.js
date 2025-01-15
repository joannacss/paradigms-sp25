const assert = require("assert");

function fibonacci(n) {
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

assert.strictEqual(fibonacci(0), 0);      // OK
assert.strictEqual(fibonacci(1), 1);      // OK
assert.strictEqual(fibonacci(2), 1);      // OK
assert.strictEqual(fibonacci(100), 354224848179262000000); // OK
assert.strictEqual(fibonacci(-1), null);  // ❌
