package datastructures;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Arrays;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.TreeSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Stack;

public class DFS {
    public List<String> traverse(String root, Map<String,List<String>> graph){
        // queue with nodes to be visited (initialized with root node)
        Stack<String> toVisit = new Stack() ;
        toVisit.add(root);
        // list of visited nodes
        List<String> output = new ArrayList();
        // set of visited nodes, to avoid getting stuck
        Set<String> visited = new HashSet();

        // keep visiting while there are nodes in the queue
        while(!toVisit.isEmpty()){
            String node = toVisit.pop();
            // check node is not visited
            if(!visited.contains(node)){
                output.add(node);
                // mark node as visited
                visited.add(node);

                // iterate over node's children and add back to queue
                List<String> children = graph.get(node);
                for(int i = children.size() - 1; i >= 0 ; i--){
                    toVisit.add(children.get(i));
                }
            }
        }


        // returns the visited nodes, in order
        return output;
    }

    
}