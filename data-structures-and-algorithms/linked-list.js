/*
  [01] Linked List

  ▣ A linked list is a linear data structure that includes a series of connected nodes.
  ▣ Each node consists of a data value and a pointer that points to the next node.
  ▣ The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure.
  ▣ Random access of elements is not feasible and accessing an element has linear time complexity.
  ▣ The linked list data structure supports 3 main operations -
    ◉ Insertion: Add an element at the beginning, end or at a given index in the list.
    ◉ Deletion: Remove an item given its index or value.
    ◉ Search: Find an element given its value.

  [02] Linked list Usage

    ◉ All applications of both stacks and queues are applications of linked lists.
    ◉ Image viewer.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Check if linked list is empty.
  isEmpty() {
    return this.size === 0;
  }

  // Returns the size of linked list.
  getSize() {
    return this.size;
  }

  // Adding a node to the start of linked list.
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // Printing nodes in a linked list
  print() {
    if (this.isEmpty()) {
      console.log("Linked list is empty !");
    } else {
      let cur = this.head;
      let listValues = ""
      while (cur) {
        listValues = listValues + `${cur.value} `
        cur = cur.next;
      }
      console.log(listValues);
    }
  }

  // Add a node to the end of linked list.
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
}

const linkedList = new LinkedList();
console.log("Size of linked-list :", linkedList.getSize());
console.log("Is linked-list empty :", linkedList.isEmpty());

linkedList.print();

linkedList.prepend(30);
linkedList.prepend(20);
linkedList.prepend(10);

linkedList.print();

linkedList.append(40);
linkedList.append(50);
linkedList.append(60);

linkedList.print();