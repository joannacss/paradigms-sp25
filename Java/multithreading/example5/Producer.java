package multithreading.example5;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.atomic.AtomicInteger;

public class Producer implements Runnable {

    private BlockingQueue<File> queue;  // shared data structure among producer/consumer threads
    private File folder;                // folder to recursively search for files
    private AtomicInteger totalFiles;   // number of files found

    public Producer(BlockingQueue<File> queue, File folder, AtomicInteger totalFiles) {
        this.queue = queue;
        this.folder = folder;
        this.totalFiles = totalFiles;
    }

    @Override
    public void run() {
        Path p = Paths.get(this.folder.getAbsolutePath());
        try {
            Files.walk(p)
                    .filter(path -> Files.isRegularFile(path) && path.toString().endsWith(".py"))
                    .forEach(file -> {
                        try {
                            this.queue.put(file.toFile());
                            this.totalFiles.incrementAndGet();
//                            System.out.printf("PRODUCER found file=%s\n", file);
                        } catch (InterruptedException e) {
                            System.out.println("Error while adding to queue: " + e.getMessage());
                        }
                    });
        } catch (IOException e) {
            // print error message
            System.out.println(e.getMessage());
        }

        System.out.println("PRODUCER finished");
    }

}
