package multithreading.example3;

import java.util.concurrent.Executors;
import java.util.concurrent.ExecutorService;
import java.util.Random;



/**
 * Example that showcases the use of the word synchronized
 */ 
public class NumberGeneratorApp {


    public static void main(String[] args) {
        // construct the shared object
        ArrayBuffer sharedBuffer = new ArrayBuffer();

        // create two tasks to write to the shared SimpleArray
        NumberGeneratorTask t1 = new NumberGeneratorTask(sharedBuffer);
        NumberGeneratorTask t2 = new NumberGeneratorTask(sharedBuffer);

        // execute the tasks with an ExecutorService
        ExecutorService executor = Executors.newCachedThreadPool();
        executor.execute(t1);
        executor.execute(t2);
        executor.shutdown();
    }
}