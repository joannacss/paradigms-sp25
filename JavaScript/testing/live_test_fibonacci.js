var assert = require('assert');
var demoFib = require('./demoFibonacci')




// describe(groupName, callback):  Groups tests 
// Arguments
//    - Test group name
//    - Callback function

// it(testName, callback): Defines a test case (e.g., “It should equal X” )
// Arguments
//    - Test description
//    - Callback function containing the test (with an assertion -- or anything that throws an Error)
describe('fibonacci(n)', function() {
  describe('Base recursion cases', function() {
    it('should return 0 when n is 0', function() {
      assert.equal(demoFib.fibonacci(0), 0);
    });
    it('should return 1 when n is 1', function() {
      assert.equal(demoFib.fibonacci(1), 1);
    });
  });
  //DEMO1: add two other groups 
  // (Group 1: stress-testing, Group 2: malicious user)
  describe("stress-testing", function(){
	  it("should return 354224848179262000000 when n = 100", function(){
		 assert(demoFib.fibonacci(100) === 354224848179262000000) ;
	  });
  });
	describe("malicious", function(){
	  it("should return null when n = -1", function(){
		 assert(demoFib.fibonacci(-1) === null) ;
	  });
  });
});  
