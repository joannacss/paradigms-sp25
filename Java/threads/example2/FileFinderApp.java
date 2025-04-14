package threads.example2;

public class FileFinderApp {
    public static void main(String[] args) {
        FileFinder f1 = new FileFinder("../", ".txt");
        FileFinder f2 = new FileFinder("../", ".py");
        FileFinder f3 = new FileFinder("../", ".java");

        Thread t1 = new Thread(f1);
        Thread t2 = new Thread(f2);
        Thread t3 = new Thread(f3);
        System.out.println("Starting three threads in " + Thread.currentThread().getName());
        t1.start();
        t2.start();
        t3.start();

        // TODO: make it wait for the threads to finish, so the print only occurs after the threads are done.
        try {
            t1.join();
            t2.join();
            t3.join();
        }catch(InterruptedException ex){
            System.out.println("Oh well!");
        }
        System.out.println("In main, after starting threads...");
        System.out.println("Thread 1 found " + f1.getFoundFiles().size() + " files.");
        System.out.println("Thread 2 found " + f2.getFoundFiles().size() + " files.");
        System.out.println("Thread 3 found " + f3.getFoundFiles().size() + " files.");
    }
}
