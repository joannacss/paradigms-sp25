; EXAMPLE 1: Declaring X and Y
(let [x 1 y 2] (+ x y))

; EXAMPLE 2: let inside a function
(defn messenger [msg]
  (let [a 7
        b 5
        c (clojure.string/capitalize msg)]
    (println a b c)
  ) ;; end of let scope
) ;; end of function