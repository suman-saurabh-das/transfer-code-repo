/*

  [01] Circular queue

  ▣ The size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element.
  ▣ Also referred to as circular buffer or ring buffer and follows the FIFO principle.
  ▣ A circular queue will reuse the empty block created during the dequeue operation.
  ▣ When working with queues of maximum size, a circular queue is a great implementation choice.
  ▣ The circular queue data structure supports 2 main operations -
    ◉ Enqueue - adds an element to the rear/tail of the collection.
    ◉ Dequeue - removes an element from the front/head of the collection.

  [02] Circular queue usage

    ◉ Clock
    ◉ Streaming data
    ◉ Traffic lights

  [03] Circular queue methods

    ◉ enqueue(element): Add an element to the queue.
    ◉ dequeue(): Remove the oldest element from the queue.
    ◉ peek(): Get the value of the element at the front of the queue without removing it.
    ◉ isEmpty(): Check if the queue is empty.
    ◉ isFull(): Check if the queue is full.
    ◉ size(): Get the number of elements in the queue.
    ◉ print(): Visualize the elements in the queue.

*/

class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.front = -1;
    this.rear = -1;
    this.currentLength = 0;
  }

  isFull() {
    return this.capacity === this.currentLength;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength = this.currentLength + 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    } else {
      console.log("Queue is full !");
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const item = this.items[this.front];
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currentLength = this.currentLength - 1;
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
      return item;
    } else {
      console.log("Queue is empty !");
      return null;
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    } else {
      console.log("Queue is empty !");
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty !");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str = str + this.items[i] + " ";
      }
      // Adding the last item
      str = str + this.items[i];
      console.log(str);
    }
  }
}

const circularQueue = new CircularQueue(5);
console.log("Is queue empty :", circularQueue.isEmpty());

circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);

circularQueue.print();
console.log("Is queue full :", circularQueue.isFull());

const removedElement = circularQueue.dequeue();
console.log("Dequeued element :", removedElement);
console.log("Element at first :", circularQueue.peek());
circularQueue.print();

circularQueue.enqueue(60);
circularQueue.print();
