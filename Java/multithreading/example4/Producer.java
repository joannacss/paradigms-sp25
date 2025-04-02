package multithreading.example4;

import java.util.concurrent.BlockingQueue;

public class Producer implements Runnable {

    private BlockingQueue<Integer> queue;

    public Producer(BlockingQueue<Integer> queue) {
        this.queue = queue;
    }

    public void run() {
        try{
            // no synchronization needed will be needed
            int value = 0;
            while (true) {
                queue.put(value);
                System.out.printf("Produced=%d\n", value);
                value++;
                Thread.sleep(200);
            }
        }catch(InterruptedException ex){
            System.err.println(ex.getMessage());
        }
    }
}
