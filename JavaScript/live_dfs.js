/**
 * Function that performs depth-first search traversal.
 * @param graph A directed graph represented as an adjency matrix.
 * @param root The initial node to start the traversal
 */
function dfs(graph, root) {
  // initializes relevant data structures
  let toVisit = [root]; // a stack initialized with root node
  let output = []; // an output to be returned
  let visited = new Set(); // a set that tracks already visited node

  // iterate over each node to be visited
  while (toVisit.length > 0) {
    // pop the node from the toVisit stack
    let node = toVisit.pop();
    // check if node is visited
    if (!visited.has(node)) {
      // add node to the output
      output.push(node);
      // mark node as visited
      visited.add(node);
      // iterate over the children (in reverse order)
      let children = graph[node];
      for (let i = children.length - 1; i >= 0; i--) {
        toVisit.push(children[i]);
      }
    }
  }
  // return the traversed nodes
  return output;
}

// test case 1
graph = { "+": ["*", 3], "*": [2, 7], 2: [], 7: [], 3: [] };
root = "+";
output = dfs(graph, root);
console.log(output);

// test case 2
graph = { 0: [1, 3], 1: [2, 3], 2: [3, 1], 3: [0, 1] };
root = 0;
output = dfs(graph, root);
console.log(output);
