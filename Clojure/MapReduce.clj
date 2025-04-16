
(def mylist (range 1 11)) 					; creates a list from 1 to 10
(map inc mylist) 														; what is the output?	
(defn myMapping [x] (* x 10))	
(map myMapping mylist) 				; what is the output?	
(reduce + mylist)				; what is the output?
(reduce * (map dec mylist)) ; what is the output