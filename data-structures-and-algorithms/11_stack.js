/*

  [01] Stack

  ▣ The stack data structure is a sequential collection of elements that follows the principle of Last In First Out. (LIFO)
  ▣ The last element inserted into the stack is first element to be removed.
  ▣ Stack is an abstract data type. It is defined by its behavior rather than being a mathematical model.
  ▣ Stack data structure supports 2 main operations -
    ◉ Push - adds element to the collection.
    ◉ Pop - removes the most recently added element from the collection.

  [02] Stack usage

    ◉ Browser history tracking.
    ◉ Undo operation when typing.
    ◉ Expression conversions (Infix to Postfix).
    ◉ Callstack in JS runtime.

  [03] Stack Methods

    ◉ push(element): Add an element to the stack.
    ◉ pop(): Remove the last element added in the stack.
    ◉ peek(): Get the value of the last element in the stack.
    ◉ isEmpty(): Check if the stack is empty.
    ◉ size(): Get the number of elements in the stack.
    ◉ print(): Visualize the elements in the stack.

*/

class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the end of the stack.
  push(element) {
    this.items.push(element);
  }

  // Remove an element from the end of the stack.
  pop() {
    return this.items.pop();
  }

  // Check if stack is empty.
  isEmpty() {
    return this.items.length === 0;
  }

  // Returns the size of the stack.
  size() {
    return this.items.length;
  }

  // Returns the last element in the stack without removing it.
  peek() {
    if(!this.isEmpty()) {
      return this.items[this.size() - 1];
    } else {
      return null;
    }
  }

  // Prints the element in the stack.
  print() {
    console.log("Stack :", this.items.toString());
  }
}
