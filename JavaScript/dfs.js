/**
 * Function that performs depth-first search traversal.
 * @param graph A directed graph represented as an adjency matrix.
 * @param root The initial node to start the traversal
 */
function dfs(graph, root){
    // initializes relevant data structures
    toVisit = [root];        // stack initialized with root node
    output = [];             // output to be returned
    visited = new Set();     // set that tracks already visited node
    
    // iterate over each node to be visited
    while(toVisit.length > 0){
        // pop the node from the toVisit stack
        node = toVisit.pop();
        // check if node is visited
        if (!visited.has(node)){
            output.push(node); // add node to the output
            visited.add(node); // mark node as visited       
            // iterate over the children (in reverse order)
            let children = graph[node];
            for(let i = children.length - 1 ; i >= 0 ; i--){
                toVisit.push(children[i]);
            }
        }
    }

    return output;
}



assert = require('assert');




// assert.deepStrictEqual: this method from the assert module verifies whether the two arrays have the same element values.
// That is, it does a 'deep' equality check (ie, values within the array)
// if the test fails, it throws an error


// test case 1
graph = {"+": ["*",3], "*":[2,7], 2:[],7:[],3:[]};
root = "+" ;
assert.deepStrictEqual(dfs(graph, root), ['+', '*', 2, 7, 3])

// test case 2
graph = {0: [1,3], 1:[2,3], 2:[3,1], 3:[0,1]};
root = 0 ;
assert.deepStrictEqual(dfs(graph, root), [0, 1, 2, 3])
