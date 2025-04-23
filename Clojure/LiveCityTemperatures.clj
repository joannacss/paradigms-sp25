; Imports the clojure.string namespace as 'str' alias
(require '[clojure.string :as str])

; hardcodes the file path to the CSV
(def filepath "./data/city_temperatures.csv")

; parse into rows using slup and str/split by new lines #"\n"
(def rows (str/split (slurp filepath) #"\n"))

; discard header using the `rest` function
; rows is a list like this ("Los Angeles,70.5" "Honolulu,80.3" ...)
(def rows (rest rows))

; map from a list of rows to:
; 				{Los Angeles (70.5), Honolulu (80.3), South Bend (55.8), Los Angeles (71.2) ...}
;;; first declare callback funtion `parse-row` that maps each row to {"city" (temperature)}
(defn parse-row [r] (let [column (str/split r #",")
																										city (get column 0)
																										temperature (Float/parseFloat (get column 1))
																									] 
																									{city (list temperature)}))
;;; apply the callback function to each element in the `rows` list 
(def rows (map parse-row rows))


; use the `reduce` function to merge temperatures by city to create a map like this:
; {"Los Angeles" (70.5 71.2 ...), "Honolulu" (80.3 81.0 ...), "South Bend" (55.8 54.5 ...)}
; store it on a variable `temperatures_map`
;;;; map-merger: function that merge two maps
(defn map-merger [x y] (concat (or x '()) y))

;;;; city-reducer: callback that takes `e1` `e2` and updates `e1` with what is in `e2`
(defn city-reducer [e1 e2] (let [e2_city (key (first e2))
																																	e2_temp (val (first e2))]
																																	(update e1 e2_city map-merger e2_temp)
																											 )
)


(def temperatures_map (reduce city-reducer rows))




; Average function
(defn avg [p] (double (/ (reduce + p)  (count p))))
; Use `doseq` to compute the statistics per city
(println "Statistics temperatures per city")
(doseq [[city temperatures] temperatures_map]
					 (println city 
					 			"\n\tmin\t" (apply min temperatures)
					 			"\n\tmax\t" (apply max temperatures)
					 			"\n\tavg\t" (avg temperatures)))

