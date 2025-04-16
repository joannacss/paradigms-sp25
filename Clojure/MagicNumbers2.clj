(ns clojure.examples.triangle
   (:gen-class))

(defn triangle []
   (doseq [c (range 1 41) b (range 1 c) a (range 1 b)] 
     (if (= (+ (* b b) (* a a)) (* c c)) 
       (printf "%d, %d, %d\n" a b c))))
	   
(triangle)