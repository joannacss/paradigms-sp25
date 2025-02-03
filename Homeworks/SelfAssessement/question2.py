def text_to_tree(expression: str) -> list:
    # ... solution here ...
    operators = ['*','/','+','-']
    nodeStack=[]
    opStack=[]
    number=""
    rels=[]

    for char in expression:
        if char not in operators:
            number += char
        else:
            if number:
                nodeStack.append(Node(number))
                number=""
            while opStack and precedence(opStack[-1], operators) <= precedence(char, operators):
                op = opStack.pop()
                right = nodeStack.pop()
                left = nodeStack.pop()
                opNode= Node(op,left,right)
                nodeStack.append(opNode)
            opStack.append(char)
    if number:
        nodeStack.append(Node(number))
    while opStack:
        op = opStack.pop()
        right = nodeStack.pop()
        left = nodeStack.pop()
        opNode = Node(op,left,right)
        nodeStack.append(opNode)
    
    root = nodeStack[0]
    relationships(root, rels)
    return rels
        
        
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.right = right
        self.left = left
    def printNodes(self):
        return self.printLeft(), self.printRight()
    def printLeft(self):
        return f"\"{self.val}\" -> {self.left.val}//left"
    def printRight(self):
        return f"\"{self.val}\" -> {self.right.val}//right"


def precedence(op, operators):
    opIndex = operators.index(op)
    if opIndex > 1:
        return 1
    else:
        return 0
    
def relationships(node: Node, rels):
    if not node.left:
        return
    rels.append(node.printLeft())
    rels.append(node.printRight())

    relationships(node.left,rels)
    relationships(node.right, rels)
    

def print_output(output: list) -> None:
    for line in output:
        print(line)


if __name__ == "__main__":
    expression = "2*7+3"  # Test 1
    output = text_to_tree(expression)
    print_output(output)
