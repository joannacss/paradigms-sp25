package multithreading.example4;

import java.util.concurrent.BlockingQueue;

public class Consumer implements Runnable{
    private BlockingQueue<Integer> queue;

    public Consumer(BlockingQueue<Integer> queue) {
        this.queue = queue;
    }

    public void run() {
        try{
            while (true) {
                int val = queue.take();
                System.out.printf("Consumer %s consumed-%d. Current size = %d\n", Thread.currentThread().getName(), val, queue.size());
                Thread.sleep(1000);
            }
        }catch(InterruptedException ex){
            System.err.println(ex.getMessage());
        }
    }
}
