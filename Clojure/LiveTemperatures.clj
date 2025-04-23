; Imports the clojure.string namespace as 'str' alias
(require '[clojure.string :as str])

; hardcodes the file path to the CSV
(def filepath "./data/temperatures.csv")

; parse into rows using slup and str/split by new lines #"\n"
(def rows (str/split (slurp filepath) #"\n"))

; discard header using the `rest` function
(def rows (rest rows))



; use `(map callback collection)` to make it a collection of floating point numbers

(def rows (map (fn [x] (Float/parseFloat x)) rows))
; print metrics
(defn avg [c] (/ (reduce + c) (count c)))

(println (apply min rows))
(println (apply max rows))
(println (avg rows))
