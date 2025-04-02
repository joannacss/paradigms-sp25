package multithreading.example2;
import java.util.concurrent.Executors;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.TimeUnit;
public class PrintTaskAppWithExecutor {
   public static void main(String[] args) {
      try{
         Thread t1 = new Thread(new PrintTask());
         Thread t2 = new Thread(new PrintTask());
         Thread t3 = new Thread(new PrintTask());
         System.out.println("Starting the executor");
         
         ExecutorService threadExecutor = Executors.newCachedThreadPool();
         threadExecutor.execute(t1);
         threadExecutor.execute(t2);
         threadExecutor.execute(t3);
         threadExecutor.shutdown(); // it does not accept any more jobs 
                                    
         
         // waits for the threads to finish.
         threadExecutor.awaitTermination(
            6,
            TimeUnit.SECONDS
         );
         System.out.println("print in main");
      } catch(InterruptedException ex){
         System.out.println(ex);
      }
   }
}
