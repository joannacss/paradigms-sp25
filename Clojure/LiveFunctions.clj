;; -------------------SYNTAX-------------------------------
;;    name      params           body
;;    -----  ----------    ----------------
;: (defn name  [p1 p2 … pn]  (      ...       ))
;; --------------------------------------------------------

;; --------------------------------------------------------
;; EXAMPLE 1: SINGLE ARITY FUNCTION NAMED `greet`
;; --------------------------------------------------------
; function `greet` that returns a string “Hello, ” + name
(defn greet [name] (str "Hello, " name))

; invoke the function which returns a value (assign to x)
(def x (greet "John"))
; print the returned value
(println x)

;; --------------------------------------------------------
;; EXAMPLE 2: MULTI-ARITY FUNCTION
;; --------------------------------------------------------
; Function named `messenger` that takes a `msg` as parameter, and prints it
; if invoked WITHOUT params, it invokes messenger with the param "Hello world"
(defn messenger
	([msg] (println msg))
	([] (messenger "Hello world"))
)
; invokes `messenger` without parameters
(messenger)
; invokes the function with 1 parameter
(messenger "Hi, Jane")

;; --------------------------------------------------------
; ; EXAMPLE 3: VARIADIC FUNCTIONS
;; --------------------------------------------------------
; Function named `hello` that takes a `greeting` & `who` as parameters
; and then prints them
(defn hello [greeting & who] (println greeting who))
(hello "Joanna" "Santos")
(hello "Hello" "world" "class") 					; output: Hello (world class)
; (hello "da" "Silva" "Santos")								; output: da (Silva Santos)


;; --------------------------------------------------------
; ; EXAMPLE 4: APPLYING FUNCTIONS
;; --------------------------------------------------------
; Computes Euclidean distance to the origin [0, 0]
(defn distance [x y] (Math/sqrt (+ (* x x) (* y y))))
(def p1 [3 4]) ; point 1 (coordinates are: x = 3, y = 4)
(def p2 [1 2]) ; point 1 (coordinates are: x = 1, y = 2)
(println (type p1))

(def dist1 (apply distance p1))
(def dist2 (distance (get p1 0) (get p1 1)))
(println dist1)
(println dist2)
; (def dist2 (apply distance p2))
; (println dist2)
; (println (> dist1 dist2))

; expression below is equivalent of doing `distance(p1[0], p1[1])` in Python
; (println (distance (get p1 0) (get p1 1)))

