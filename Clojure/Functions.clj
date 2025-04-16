; EXAMPLE 1: SINGLE ARITY FUNCTION
(defn greet  [name]  (str "Hello, " name)) ; returns a string “Hello, ” + name
(def x (greet "students"))																	; invokes the function which returns a value (assign to x)
(println x)																																; prints the returned value

; EXAMPLE 2: MULTI-ARITY FUNCTION
(defn messenger
  ([]     (messenger "Hello world")) 						; if no params, invoke messenger with the param "Hello world"
  ([msg]  (println msg))) 																	; prints the message passed as a parameter

(messenger)																																; invokes without parameters
(messenger "My message") 																		; invokes the function with 1 parameter


; EXAMPLE 3: VARIADIC FUNCTIONS
(defn hello [greeting & who]
  (println greeting who))

(hello "Hello" "world" "class") 					; output: Hello (world class)
(hello "Silva" "Santos")													; output: 



; EXAMPLE 4: APPLYING FUNCTIONS
(defn f [a b c d] (+ a b c d))
(apply f '(1 2 3 4))    ;; same as  (f 1 2 3 4)
(apply f 1 '(2 3 4))    ;; same as  (f 1 2 3 4)
(apply f 1 2 '(3 4))    ;; same as  (f 1 2 3 4)
(apply f 1 2 3 '(4))    ;; same as  (f 1 2 3 4)


; EXAMPLE 5: APPLYING FUNCTIONS
; (:require [clojure.math.numeric-tower :as math])
(defn distance [x y] (Math/sqrt (+ (* x x) (* y y))))
(def p1 [3 4]) ; point 1 (coordinates are: x = 3, y = 4)
(def p2 [1 2]) ; point 1 (coordinates are: x = 1, y = 2)
(def dist1 (apply distance p1))
(def dist2 (apply distance p2))
(println (> dist1 dist2))