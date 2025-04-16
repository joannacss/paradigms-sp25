; Persistent Data structures
(def a (list (repeat 10 "dog"))) ; 1000-dog list
(def b (conj a "cat")) ; new list, cat at front

; Demonstrate that a is indeed a persistent list (data structure)
(use 'clojure.test)
(is (identical? a (rest b)))
(is (= (type a) clojure.lang.PersistentList))