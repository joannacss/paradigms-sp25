; Name spaces
(ns library)        ; Going to work in this ns

(def x 5)           ; Map symbol x to a var
(defn average [x y] ; Define a function `average`
   (/ (+ x y) 2))   ; compute average of x and y

(println "AVERAGE of 2 and 4=" (average 2 4))



(ns application)    ; Switch to new namespace
(def x 8)          
(println "x in application namespace is = " x)
(println "x in library namespace is = " library/x)
(println "AVERAGE of 2 and 4 =" (library/average 2 4))
(use 'library)
(println "Library x is = " x)
