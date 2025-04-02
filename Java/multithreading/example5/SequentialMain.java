package multithreading.example5;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.concurrent.atomic.AtomicInteger;

public class SequentialMain {

    private static int countLines(String filePath) throws IOException {
        int count = 0;
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            while (reader.readLine() != null) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        long startTime = System.currentTimeMillis();
        File folder = new File("/Users/joanna/Documents/Portfolio/GitHub/joannacss/");
        AtomicInteger totalLines = new AtomicInteger();
        AtomicInteger totalFiles = new AtomicInteger();
        Path p = Paths.get(folder.getAbsolutePath());
        try {
            Files.walk(p)
                    .filter(path -> Files.isRegularFile(path) && path.toString().endsWith(".py"))
                    .forEach(file -> {
                        try {
                            totalFiles.incrementAndGet();
                            totalLines.addAndGet(countLines(file.toAbsolutePath().toString()));
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    });
        } catch (IOException e) {
            // print error message
            System.out.println(e.getMessage());
        }
        System.out.println("Total files = " + totalFiles);
        System.out.println("Total lines = " + totalLines);
        long endTime = System.currentTimeMillis();
        System.out.println("Time taken: " + (endTime - startTime) + " ms");
    }
}
