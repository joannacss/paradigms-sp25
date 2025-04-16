; A function that generates an array from 0 to n (does not use transient)
(defn vrange [n]
  (loop [i 0 v []]
    (if (< i n)
      		(recur (inc i) (conj v i)) 
      		v
     )
   )
)
; Transient version of vrange
(defn vrange2 [n]
  (loop [i 0 v (transient [])]
    (if (< i n)
      (recur (inc i) (conj! v i))
      (persistent! v)
     )
  )
)
; Performance checks
(println "Non Transient")
(time (vrange 1000))
(time (println "Transient"))
(vrange2 1000)

