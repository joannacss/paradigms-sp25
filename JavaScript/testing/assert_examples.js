const assert = require('assert');

var x = { a : { n: 0 } };
var y = { a : { n: 0 } };
var z = { a : { n: '0' } };
var w = x;
assert(x["a"]["n"] === y["a"]["n"]); // OK
assert(x.a.n === y.a.n); // OK
assert.deepStrictEqual(x, y); // OK
assert.strictEqual(x, w); // OK
assert.strictEqual(x, z); // AssertionError: Expected x == z (reference equals)
assert.deepStrictEqual(x, z); // AssertionError: { a: { n: 0 } } deepStrictEqual {a: { n: '0' } }
