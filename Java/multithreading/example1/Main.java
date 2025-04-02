package multithreading.example1;

public class Main{

	public static void main(String[] args) {
        System.out.println("Inside : " + Thread.currentThread().getName());

        System.out.println("Creating 3 threads in "+Thread.currentThread().getName());
        Thread t1 = new Thread(new RunnableExample());
        Thread t2 = new Thread(new RunnableExample());
        Thread t3 = new Thread(new RunnableExample());

        System.out.println("Starting threads...");
        t1.start();
        t2.start();
        t3.start();
    }

}