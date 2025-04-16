; hardcodes the file path to the CSV
(def filepath "./data/temperatures.csv")

; parse into rows using slup and str/split by new lines #"\n"
(def rows (clojure.string/split (slurp filepath) #"\n"))

; discard header using the `rest` function
(def rows (rest rows))

; use `map` to make it a collection of floating point numbers
(def rows (map (fn [e] (Float/parseFloat e)) rows) )

; define `avg` function that computes the average
(defn avg [a] (/ (reduce + a) (count a)))

; print metrics
(println "min = " (apply min rows))
(println "max = " (apply max rows))
(println "average = " (avg rows))