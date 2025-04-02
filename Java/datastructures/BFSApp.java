package datastructures;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.List;
public class BFSApp {
    public static void main(String[] args) {
        Map<String, List<String>> graph = new HashMap<>();

        graph.put("a", Arrays.asList("b", "e"));
        graph.put("b", Arrays.asList("c", "d"));
        graph.put("c", Arrays.asList("e"));
        graph.put("d", Arrays.asList("b"));
        graph.put("e", Arrays.asList("a", "f"));
        graph.put("f", Arrays.asList());

        BFS bfs = new BFS();
        System.out.println(bfs.traverse("a", graph));


    }
}