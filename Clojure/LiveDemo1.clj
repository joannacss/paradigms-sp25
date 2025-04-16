;; Compute the expression:
;; ( 7 + 3 * 4 + 5 ) / 10
;; Store the result in a variable called "a"
;; (7 + (3 * 4) + 5) / 10
(def a (/ (+ 7 (* 3 4) 5) 10))
;; print the value of "a" to the console
(print (float a))