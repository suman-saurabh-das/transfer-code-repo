/*
  ▣ Optimized queue - Earlier queue was implemented using array, in which we used shift() method for dequeue operation, which has time complexity of O(n). To optimize this, we will use objects which will have O(1) time complexity for Enqueue and Dequeue operations.
*/

class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  size() {
    return this.rear - this.front;
  }

  peek() {
    return this.items[this.front];
  }

  print() {
    console.log(this.items);
  }
}

const queue = new Queue();

console.log("Is queue empty ? ", queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Elements in queue :");
queue.print();

console.log("First element removed :", queue.dequeue());
console.log("Element at first position :", queue.peek());
