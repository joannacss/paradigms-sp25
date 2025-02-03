def bfs_traversal(graph, initial_node):
    # your implementation here
    # your function will return a list!
    theQueue=[]
    theList=[]
    theQueue.append(initial_node)
    while theQueue:
        node = theQueue.pop(0)
        if node not in theList: theList.append(node)
        for value in graph[node]:
            if value not in theList:
                theQueue.append(value)
        
        
    return theList

        

graph = {"+": ["*",3], "*":[2,7], 2:[],7:[],3:[]}
initial_node = "+" 

print(bfs_traversal(graph, initial_node))
