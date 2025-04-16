(require '[clojure.string :as str])

(def fileContents (slurp "graph.csv"))

(def rows (str/split fileContents #"\n"))

(defn parseRow [x] (str/split x #","))
(defn parseColumn [x] (str/split x #";"))
(def columns (map parseRow rows))

(doseq
		[rows (str/split fileContents #"\n")]
		(def columns (str/split rows #","))
		(println columns)
)


