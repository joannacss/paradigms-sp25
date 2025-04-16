 ; Assertions to show types
 (use 'clojure.test) 
 (is (= (type 3) Long)) 
 (is (= (type 5.0) Double)) 
 (is (= (type 4/7) clojure.lang.Ratio)) 
 (is (= (type 5N) clojure.lang.BigInt)) 
 (is (= (type 5.88M) BigDecimal)) 
 (is (= (type "Hello World") String)) 
 (is (= (type \z) Character)) 
 (is (= (type false) Boolean)) 
 (is (= (type nil) nil)) 
 (is (= (type 'dog) clojure.lang.Symbol)) 
 (is (= (type :dog) clojure.lang.Keyword)) 
 (is (= (type Long) java.lang.Class)) 
 (is (= (type java.lang.Class) java.lang.Class)) 
 
 ; Operators are just regular expressions
 (use 'clojure.test) 
 (is (= (+ 8 7 3 2 8) 28)) 	; Sum many numbers
 (is (= (+ 8) 8)) 			; You can sum just one
 (is (= (+) 0)) 			; 0 is the identity for +
 (is (< 3 5 7 9 12)) 		; A convenient sort test
 (is (not (<= 8 9 10 22 20 8))) 
 (is (= (max 8 7 14 2 8) 14)) 
 
 ; Division operator produces longs, doubles, or ratios
  (use 'clojure.test) 
  (is (= (type (/ 3 9)) clojure.lang.Ratio)) 
  (is (= (type (/ 8 4)) Long)) 
  (is (= (type (/ 3.0 9)) Double)) 
  
 ; Functions +, -, *, inc, and dec on longs might overflow and throw and ArithmeticException
 ; Use +', -', *', inc', and dec' to auto-promote to BigInt:
  (use 'clojure.test) 
  (let [x (long 1E15) max-long Long/MAX_VALUE] 
  (is (thrown? ArithmeticException (* x x))) 
  (is (= (*' x x) (bigint 1E30))) 
  (is (thrown? ArithmeticException (inc max-long))) (
  is (= (inc' max-long) (+' 1 max-long)))) 
  
  ; Collections
  (use 'clojure.test) 
  (let [a-list '(1 2 3) a-vec [1 2 3] a-set #{1 2 3} a-map {1 2 3 4}] 
  (is (= (empty? a-set)) false) 
  (is (not-empty a-vec)) 
  (is (= (map count [a-list a-vec a-set]) [3 3 3])) 
  (is (= (count a-map) 2)) 
  (is (= (conj a-list 4) '(4 1 2 3))) 
  (is (= (conj a-vec 4) [1 2 3 4])) 
  (is (= (conj a-set 4) #{3 2 1 4})) 
  (is (= (conj a-map [5 6]) {1 2 5 6 3 4}))) ; adds a new pair 
  
 ; Functions and sequences
 (use 'clojure.test) 
 (let [a '(10 20 30) b #{5 15 25 35}] 
 (is (some #(> % 30) b)) 
 (is (reduce * a) 6000) 
 (is (= (map inc a) (seq [11 21 31]))) 
 (is (take 2 a) (seq [10 20])) 
 (is (= (interleave a (sort b)) (seq '(10 5 20 15 30 25))))) 
 

; More on vars
 (use 'clojure.test) 
 (def x 100) 						; create a Var, map x to it
 (def y #'x) 						; the actual Var that x maps to 
 (is (= (type y) clojure.lang.Var)) ; the Var is an object with a type 
 (is (= (deref y) 100)) 			; deref is the value in y
 (def x 200)       					; Update the var through the symbol
 (is (= @y 100)) 					; @y is shorthand for (deref y) 
 (is (= (deref y) 200)) 			; See the change directly 
 (is (identical? #'x (var x)))    	; #'x is shorthand for (var x) 
 
 


  