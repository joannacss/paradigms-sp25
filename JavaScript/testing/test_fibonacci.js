var assert = require('assert');
var demoFib = require('./demoFibonacci')




// describe():  Groups tests 
// Arguments
//    - Test group name
//    - Callback function

// it(): Defines a test case (e.g., “It should equal X” or “It should log the user in.”)
// Arguments
//    - Test description
//    - Callback function containing test (with an assertion -- or anything that throws an Error)



describe('fibonacci(n)', function() {
  describe('Base recursion cases', function() {
    it('should return 0 when n is 0', function() {
      assert.equal(demoFib.fibonacci(0), 0);
    });
    it('should return 1 when n is 1', function() {
      assert.equal(demoFib.fibonacci(1), 1);
    });
  });
  //DEMO1: add another group
  describe('stress-testing', function() {
    it('should return 354224848179262000000 when n is 100', function() {
      assert.equal(demoFib.fibonacci(0), 0);
    });    
  });
  describe('acting like a malicious user', function() {
    it('should return null when n is -1', function() {
      assert.equal(demoFib.fibonacci(-1), null);
    });
  });
  //DEMO2: add an alternative assertion using exceptions
  describe('acting like a malicious user', function() {
    it('should return 2 when n is 3', function() {
      let answer = demoFib.fibonacci(3);
      let expected = 22; // purposely wrong, so you can see the test failing!
      if( answer !== expected)
        throw new Error(`Function returned ${answer} instead of ${expected}`);
    });
  });
});  
