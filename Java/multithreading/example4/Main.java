package multithreading.example4;

import java.util.concurrent.Executors;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ExecutorService;




public class Main {
    public static void main(String[] args) throws InterruptedException {
        // shared data structure (blocking queue. size = 10)
        BlockingQueue<Integer> bq = new LinkedBlockingQueue<>(10);
        // producer
        Producer p = new Producer(bq);
        // consumers
        Consumer c1 = new Consumer(bq);
        Consumer c2 = new Consumer(bq);
        // execute the tasks with an ExecutorService
        ExecutorService executor = Executors.newCachedThreadPool();
        executor.execute(p);
        executor.execute(c1);
        executor.execute(c2);
        executor.shutdown();
    }
}
