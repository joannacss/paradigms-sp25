def tree_to_text(tree, root_node):
    # your implementation here
    # your function will return a string!
    ans=""
    inOrder(root_node, ans, tree)
    print(ans)

def inOrder(node, expression, tree):
    if node is None:
        return 
    if not tree[node]:
        expression+=str(node)
        #print(expression)
        return expression
    expression = inOrder(tree[node][0], expression, tree)
    print(node)
    expression += str(node)
    
    expression = inOrder(tree[node][1],expression, tree)

graph = {"+": ["*",3], "*":[2,7], 2:[],7:[],3:[]}
initial_node = "+" 
tree_to_text(graph, initial_node)