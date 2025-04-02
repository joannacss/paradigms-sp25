package multithreading.example2;
public class PrintTaskApp {
   public static void main(String[] args) {
       
       Thread t1 = new Thread(new PrintTask());
       Thread t2 = new Thread(new PrintTask());
       Thread t3 = new Thread(new PrintTask());
       System.out.println("Starting three threads in " + Thread.currentThread().getName());
       t1.start();
       t2.start();
       t3.start();
       
       // TODO: make it wait for the threads to finish.
       try {
         t1.join();
         t2.join();
         t3.join();
       }catch(InterruptedException ex){
         System.out.println("Oh well!");
       }
       System.out.println("print in main");
       
   }
}
