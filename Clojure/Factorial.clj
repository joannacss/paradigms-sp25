(defn factorial [n]
  (loop [count n acc 1]                    ;; initializes count and acc
     (if (zero? count)                        ;; start of the if clause
         acc                                  ;; condition is true
         (recur (dec count) (* acc count))      ;; condition is false
     ) ;end if
   ) ;end loop 
) ; end of function declaration
(def n (Integer/parseInt (first *command-line-args*)))
(def result (factorial n))
(printf "The factorial of %d is %d" n result)
