/*

  [01] Queue

    ▣ The queue data structure is a sequential collection of elements that follows the principle of First In First Out (FIFO).
    ▣ The first element inserted into the queue is the first element to be removed.
    ▣ Analogy: A queue of people. People enter the queue at one end (rear/tail) and leave the queue from the other end (front/head).
    ▣ Queue is an abstract data type. It is defined by its behavior rather than being a mathematical model.
    ▣ Queue data structure supports 2 main operations -
      ◉ Enqueue: Adds an element to the rear/tail of the collection.
      ◉ Dequeue: Removes an element from the front/head of the collection.

  [02] Stack Usage

    ◉ Printers.
    ◉ CPU task scheduling.
    ◉ Callback queue in JS runtime.

  [03] Queue Methods

    ◉ enqueue(element): Add an element to the queue.
    ◉ dequeue(): Remove the oldest element from the queue.
    ◉ peek(): Get the value of the element at the front of the queue without removing it.
    ◉ isEmpty(): Check if the queue is empty.
    ◉ size(): Get the number of elements in the queue.
    ◉ print(): Visualize the elements in the queue.

*/

class Queue {
  constructor() {
    this.items = []
  }

  // Add an element to the end of queue.
  enqueue(element) {
    this.items.push(element);
  }

  // Remove an element from the start of queue and return it.
  dequeue() {
    return this.items.shift();
  }

  // Check if queue is empty.
  isEmpty() {
    return this.items.length === 0;
  }

  // Returns the size of the queue.
  size() {
    return this.items.length;
  }

  // Returns the first element in queue without removing it.
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    } else {
      return null;
    }
  }

  // Prints the elements in the queue.
  print() {
    console.log("Queue :", this.items.toString());
  }
}

const queue = new Queue();

console.log("Is queue empty :", queue.isEmpty());

queue.enqueue(10); 
queue.enqueue(20); 
queue.enqueue(30);

console.log("Queue has length :", queue.size());
queue.print();

queue.dequeue();
queue.print();

console.log("First element in the queue :", queue.peek());
