;EXAMPLE 1: Vectors

(get ["abc" false 99] 0) ; Retrieves the element in the array below
(def x (vector 1 2 3)) 	; creating a vector using the vector function
(def y [1 2 3])        	; vector creating using literal
(count x)															; count the # of elements
(get y 1)															; y[1]


; For example, lets create a vector and modify it with conj.
(def u (conj x 4 5 6)) ;append 4, 5, and 5 into the array x (conj returns a new vector)
(println "x = " x) ; the original vector is unchanged
(println "(conj x 4 5 6) = "u) ; the returned vector is changed (new object)



;EXAMPLE 2: Lists
(def mylist '("J" false 1))
(def mylist2 (conj mylist "C"))
(println "mylist2 = " mylist2 )


;EXAMPLE 3: Stacks
(println "(peek [1 2 3 4]) = " (peek [1 2 3 4]))
(println "(peek []) = " (peek []))
(println "(peek '(1 2 3 4)) = " (peek '(1 2 3 4)))
(println "(peek '()) = " (peek '()))
(println "(pop '(1 2 3 4)) = " (pop '(1 2 3 4)))
(println "(pop '()) = " (pop '()))


; EXAMPLE 4: Sets

(def players #{"Alice", "Bob", "Kelly"})
(def players2 (conj players "Fred"))
; The disj ("disjoin") function is used to remove one or more elements from a set.
(def players3 (disj players "Bob" "Sal"))
(contains? players "Kelly")

; EXAMPLE 5: Maps
(def scores {"Fred" 1400, "Bob" 1240, "Angela" 1024})
(assoc scores "Sally" 0)
(assoc scores "Bob" 0)
(dissoc scores "Bob")
(get scores "Angela")





