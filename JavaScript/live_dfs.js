class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(n) {
    if (!this.adjacencyList.has(n)) {
      this.adjacencyList.set(n, []);
    }
  }
  // n1 -> n2
  addEdge(n1, n2) {
    if (!this.adjacencyList.has(n1)) {
      this.addNode(n1);
    }
    if (!this.adjacencyList.has(n2)) {
      this.addNode(n2);
    }

    this.adjacencyList.get(n1).push(n2);    
  }

  dfs(startNode) {
    // Initializes relevant data structures
    let stack = []  // a stack initialized with the startNode
    let visited = new Set()  // a set that tracks nodes already visited
    let results = []  // the output to be returned

    stack.push(startNode);
    // iterate over each node to be visited (in the stack)
    while(stack.length != 0){

      // pop node from the stack
      let current = stack.pop();
      // check if node is visited
      if(!visited.has(current)){
        // add node to the output
        results.push(current);
        // mark node as visited
        visited.add(current);
        // traverse children nodes
        let children = this.adjacencyList.get(current);
        for(let i = children.length - 1; i >= 0 ; i--){
          stack.push(children[i]);
        }
      }
    }
    // return the results (list of nodes)
    return results;

  }

  bfs(startNode) {
    // TODO: (as an activity!)
  }

}

// Test cases:
let g1 = new Graph();
g1.addEdge("+", "*");
g1.addEdge("+", 3);
g1.addEdge("*", 2);
g1.addEdge("*", 7);
// console.log(g1);
console.log(g1.dfs("+"));
// console.log(g1.bfs("+"));


// let g2 = new Graph();
// g2.addEdge(0, 1);
// g2.addEdge(0, 3);
// g2.addEdge(1, 2);
// g2.addEdge(1, 3);
// g2.addEdge(2, 3);
// g2.addEdge(2, 1);
// g2.addEdge(3, 0);
// g2.addEdge(3, 1);
// console.log(g2);
// console.log(g2.dfs(0));
// console.log(g2.bfs(0));

