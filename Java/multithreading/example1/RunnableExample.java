package multithreading.example1;

// 
public class RunnableExample implements Runnable {

    // run() method contains the code that is executed by the thread.
    @Override
    public void run() {
        System.out.println("Inside : " + Thread.currentThread().getName());
    }
    
}