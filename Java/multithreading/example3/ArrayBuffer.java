package multithreading.example3;

import java.util.Random;

public class ArrayBuffer {
    private int buffer[];
    private int currentSize;

    public ArrayBuffer() {
        this.buffer = new int[10];
        this.currentSize = 0; // un-needed! WHY?!
    }

    public synchronized void add(int val) {
        this.buffer[currentSize] = val;
        this.currentSize = (currentSize + 1) % buffer.length;
        System.out.printf("%s adding %d to position %d\n", Thread.currentThread().getName(), val, currentSize);
    }

}