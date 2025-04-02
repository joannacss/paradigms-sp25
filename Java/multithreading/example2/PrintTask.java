package multithreading.example2;

import java.util.Random;


public class PrintTask implements Runnable {

	private int sleepDuration;
	public PrintTask(){
		Random random = new Random();       		
		this.sleepDuration =  random.nextInt(5000); 
	}
    
   	public void run() {
       	String threadName = Thread.currentThread().getName();
       	try { 
       		System.out.printf("%s going to sleep for %d milliseconds.\n", 
				threadName, 
				this.sleepDuration);
           	Thread.sleep(this.sleepDuration); 
       	} catch (InterruptedException exception) {
			System.out.printf("%s %s\n", 
				threadName, 
				"terminated prematurely due to interruption");
       	}

       	System.out.printf("%s done sleeping\n", threadName);
   } 
} 
