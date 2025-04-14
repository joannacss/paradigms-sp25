package threads.example2;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

public class FileFinder implements Runnable {
    private final String folderPath;
    private final String extension;
    private final List<Path> foundFiles;

    public FileFinder(String folderPath, String extension) {
        this.folderPath = folderPath; // Path to the folder to search
        this.extension = extension; // File extension to search for (e.g., ".txt")
        this.foundFiles = new ArrayList<>(); // it will hold the results (files that were found)
    }

    @Override
    public void run() {
        String threadName = Thread.currentThread().getName();
        System.out.printf("%s searching for %s files\n", threadName, this.extension);
        File folder = new File(folderPath);

        try {
            Files.walk(folder.toPath())
                    .filter(path -> path.toString().endsWith(this.extension))
                    .forEach(path -> {
                        this.foundFiles.add(path);
                        System.out.printf("Found by %s the file %s\n", threadName, path);
                    });
        } catch (IOException e) {
            System.err.println("Error reading directory: " + e.getMessage());
            return;
        }
    }

    public List<Path> getFoundFiles() {
        return foundFiles;
    }
}
