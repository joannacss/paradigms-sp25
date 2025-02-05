class Graph {
  constructor() {
    // Using a Map where keys are vertices and values are arrays of adjacent vertices
    this.adjacencyList = new Map();
  }

  /**
   * Adds a node to the graph.
   * @param {string} n - The name (or label) of the n.
   */
  addNode(n) {
    if (!this.adjacencyList.has(n)) {
      this.adjacencyList.set(n, []);
    }
  }

  /**
   * Adds a directed edge between two nodes n1 --> n2.
   * If the vertices do not exist yet, they will be created.
   * @param {string} n1
   * @param {string} n2
   */
  addEdge(n1, n2) {
    if (!this.adjacencyList.has(n1)) {
      this.addNode(n1);
    }
    if (!this.adjacencyList.has(n2)) {
      this.addNode(n2);
    }

    // Add n2 to n1's adjacency list
    this.adjacencyList.get(n1).push(n2);    
  }

  /**
   * Performs a Breadth-First Search (BFS) starting from 'startNode'.
   * @param {string} startNode - The node from which to begin BFS.
   * @returns {string[]} The order in which the nodes were visited.
   */
  bfs(startNode) {
    if(!this.adjacencyList.has(startNode)) return []; // node doesnt exist in graph!
    const visited = new Set();
        const queue = [startNode];
        const result = [];

        while (queue.length > 0) {
            const current = queue.shift();
            // check if node has already been visited
            if(!visited.has(current)){
                visited.add(current); // mark as visited
                result.push(current); // add to the output
                // traverse children nodes
                let children = this.adjacencyList.get(current);
                for(let i = 0 ; i < children.length ; i++){
                    queue.push(children[i]);                    
                }
            }      
        }
        return result;
  }

  /**
   * Performs a Depth-First Search (DFS) starting from 'startNode'.
   * @param {string} startNode - The node from which to begin DFS.
   * @returns {string[]} The order in which the nodes were visited.
   */
    dfs(startNode) {
        if(!this.adjacencyList.has(startNode)) return [];
        const visited = new Set();
        const stack = [startNode];
        const result = [];

        while (stack.length > 0) {
            const current = stack.pop();
            // check if node has already been visited
            if(!visited.has(current)){
                visited.add(current); // mark as visited
                result.push(current); // add to the output
                // traverse children nodes
                let children = this.adjacencyList.get(current);
                for(let i = children.length - 1 ; i >= 0 ; i--){
                    stack.push(children[i]);                    
                }
            }      
        }
        return result;
    }
}

// Examples:
let g1 = new Graph();
g1.addEdge("+", "*");
g1.addEdge("+", 3);
g1.addEdge("*", 2);
g1.addEdge("*", 7);
console.log(g1);
console.log(g1.dfs("+"));
console.log(g1.bfs("+"));


let g2 = new Graph();
g2.addEdge(0, 1);
g2.addEdge(0, 3);
g2.addEdge(1, 2);
g2.addEdge(1, 3);
g2.addEdge(2, 3);
g2.addEdge(2, 1);
g2.addEdge(3, 0);
g2.addEdge(3, 1);
console.log(g2);
console.log(g2.dfs(0));
console.log(g2.bfs(0));

