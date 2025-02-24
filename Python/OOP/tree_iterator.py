class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def __str__(self):
        return self.value

class BinaryTree:
    def __init__(self):
        self.root = None
        self.size = 0

    def add(self, value):
        if value is None: return  # does not allow insertion of None values
        if self.root is None:
            self.root = Node(value)
        else:
            def _insert_in_order(current_node, current_value):
                if current_node.left is None:
                    current_node.left = Node(current_value)
                elif current_node.right is None:
                    current_node.right = Node(current_value)
                else:
                    _insert_in_order(current_node.left, current_value)

            _insert_in_order(self.root, value)
        self.size += 1

    def __iter__(self):
        return BFSIterator(self)

    def __len__(self):
        return self.size

    def __str__(self):
        return " ".join(str(x) for x in self)

class BFSIterator:
    def __init__(self, tree):
        self.to_visit = [tree.root]

    def __iter__(self):  # creates the iterable object
        return self

    def __next__(self):  # invoked at every iteration
        # checks whether there are nodes left to visit
        if self.to_visit:
            node = self.to_visit.pop(0)
            if node.left:
                self.to_visit.append(node.left)
            if node.right:
                self.to_visit.append(node.right)
            return node

        # if we reach this statement
        # there are no more elements to traverse
        raise StopIteration()  # stops iteration


if __name__ == '__main__':
    tree = BinaryTree()
    tree.add("A")
    tree.add("B")
    tree.add("C")
    tree.add("D")
    tree.add("E")
    for n in BFSIterator(tree):
        print(n)
