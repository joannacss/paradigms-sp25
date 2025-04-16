; factorial with loop and recur
(def factorial
  (fn [n]
    (loop [cnt n acc 1]              ;; initializes cnt and acc
       (if (zero? cnt)               ;; start of if clause
           (printf "The factorial of %d is %d" n acc)  ;; condition is true
           (recur (dec cnt) (* acc cnt))   ;; condition is false
; in loop cnt will take the value (dec cnt)
; and acc will take the value (* acc cnt)
; note recur must be in the tail position
))))

(factorial 3)

; Persistent Data structures
(def a (list (repeat 1000 : dog))) ; 1000-dog list
(def b (conj a :cat))	; new list with cat at front

(use 'clojure.test)
(is (identical? a (rest b)))
(is (= (type a) clojore.lang.PersistentList))

; Non transient data structure for building
(defn fib []
    (map first 
      (iterate 
        (fn [[a b]] [b (+ a b)])
        [0N 1N])))  ; Needed to force a bigint here!
 
(println "Non transient version")
(time (take 5000 (fib)))

; Transient example
(defn vrange [n]
  (loop [i 0 v []]
    (if (< i n)
      (recur (inc i) (conj v i))
      v)))

(defn vrange2 [n]
  (loop [i 0 v (transient [])]
    (if (< i n)
      (recur (inc i) (conj! v i))
      (persistent! v))))

(println "Non Transient")
(time (vrange 1000))
(time (println "Transient"))
(vrange2 1000)

; Transient data structure for building
(defn fibTransient [n] 
	(loop [a 0 b 1 result (transient [0])] 
		(if (> b n) 
			(persistent! result) 
			(recur b (+' a b) (conj! result b))))) 

(use 'clojure.test) 
(println "Transient version")
(time (fibTransient 5000))
;(is (= (fib 1) [0 1 1])) 
;(is (= (fib 5) [0 1 1 2 3 5]))
 
; Homoiconic
; Macro Example #1
(defmacro eval-infix [form] 
   (list (second form) (first form) (second (rest form)))) 
   
(use 'clojure.test) 
(is (= (eval-infix (20 * 7)) 140)) 
(is (= (macroexpand '(eval-infix (20 * 7))) '(* 20 7))) 
 
; Macro Example #2
(defmacro unless [condition this that] 
   (list 'if (list 'not condition) this that)) 
   
(use 'clojure.test) 
(is (= (unless (< 1 2) 10 7) 7)) 
(is (= (unless (< 2 1) 10 7) 10)) 
(is (= (macroexpand '(unless (< 1 2) 10 7)) 
  '(if (not (< 1 2)) 10 7))) 