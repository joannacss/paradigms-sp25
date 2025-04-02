package multithreading.example3;

import java.util.concurrent.Executors;
import java.util.concurrent.ExecutorService;
import java.util.Random;

public class NumberGeneratorTask implements Runnable {
    private ArrayBuffer buffer; // object that is shared across threads!
	private static Random generator = new Random(); // 
    // constructor receives a reference to the buffer
	public NumberGeneratorTask(ArrayBuffer buffer) {
        this.buffer = buffer;
    }

    public void run() {
        try {
            // random value from 1 - 100
			int randomValue = generator.nextInt(100) + 1;
            
			// add to the buffer
			this.buffer.add(randomValue);

			// put thread to sleep for 0-5 seconds
            int sleepTime = generator.nextInt(5000);
            System.out.printf("%s will sleep for %d milliseconds\n", Thread.currentThread().getName(), sleepTime);

			// put thread to sleep
			Thread.sleep(sleepTime); 
        } catch (InterruptedException ex) {
            System.out.println(ex.getMessage());
        }
    }
}