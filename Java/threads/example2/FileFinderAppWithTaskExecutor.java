package threads.example2;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class FileFinderAppWithTaskExecutor {
    public static void main(String[] args) throws InterruptedException {
        FileFinder f1 = new FileFinder("../", ".txt");
        FileFinder f2 = new FileFinder("../", ".py");
        FileFinder f3 = new FileFinder("../", ".java");

        Thread t1 = new Thread(f1);
        Thread t2 = new Thread(f2);
        Thread t3 = new Thread(f3);
        System.out.println("Starting three threads in " + Thread.currentThread().getName());

        try {
            ExecutorService threadExecutor = Executors.newCachedThreadPool();
            threadExecutor.execute(t1);
            threadExecutor.execute(t2);
            threadExecutor.execute(t3);
            threadExecutor.shutdown(); // it does not accept any more jobs
            // waits for the threads to finish.
            threadExecutor.awaitTermination(
                    6,
                    TimeUnit.SECONDS
            );
        } catch (InterruptedException ex) {
            System.out.println("Oh well!");
        }

        System.out.println("In main, after starting threads...");
        System.out.println("Thread 1 found " + f1.getFoundFiles().size() + " files.");
        System.out.println("Thread 2 found " + f2.getFoundFiles().size() + " files.");
        System.out.println("Thread 3 found " + f3.getFoundFiles().size() + " files.");
    }
}
