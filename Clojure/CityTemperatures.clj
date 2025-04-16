(require '[clojure.string :as str])


; hardcodes the file path to the CSV
(def filepath "./data/city_temperatures.csv")

; parse into rows using slup and str/split by new lines #"\n"
(def rows (str/split (slurp filepath) #"\n"))

; discard header using the `rest` function
(def rows (rest rows))


; parse one row and return a map that is like this:
; {"city" (temperature)}
(defn parse-row [row]
  (let [column (str/split row #",")
  						city (get column 0)
  						temperature (Float/parseFloat (get column 1))
  					]
  					{city (list temperature)}  					
  	)
)
; map from a list of rows to {Los Angeles (70.5), Honolulu (80.3), South Bend (55.8), ...}
(def mapped_rows (map parse-row rows))



; use the reduce function to merge temperatures by city
; goal is to create a map that looks like this:
; {Los Angeles (70.5 71.2), Honolulu (80.3 81.0), South Bend (55.8 54.5)}
(defn map-merger [x y] (concat (or  x '()) y))


(defn city-reducer [e1 e2]
			(let [e2_city (key (first e2))
									e2_temp (val (first e2))] 
									(update e1 e2_city map-merger e2_temp)
			)
)

(def temperatures_map (reduce city-reducer mapped_rows))


; Average function
(defn avg [p] (double (/ (reduce + p)  (count p))))


; Use `for` to compute the statistics per city
(println "Statistics temperatures per city")
; (println 		(for [[city temperatures] temperatures_map]
; 					 {city 
; 					 		{"min" (apply min temperatures) "max" (apply max temperatures) "avg" (avg temperatures)}
; 						} ))


(doseq [[city temperatures] temperatures_map]
					 (println city 
					 			"\n\tmin\t" (apply min temperatures)
					 			"\n\tmax\t" (apply max temperatures)
					 			"\n\tavg\t" (avg temperatures)))
