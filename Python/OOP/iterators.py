for x in (1,2,3):  #elements of a tuple
    print(x)
 
for x in [1,2,3]:  #elements of a list
    print(x) 

for x in {1,2,3}:  #elements of a set
    print(x) 

for c in 'hello':  #characters of a string
    print(c) 

for k in {'x':1, 'y':2, 'z':3}:   #keys of a dictionary
    print(k) 

with open('colors') as f: 
    for line in f:  
        print(line.strip())  #lines of a file
        
        