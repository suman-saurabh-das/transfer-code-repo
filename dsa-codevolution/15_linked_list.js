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

  isEmpty() {
    // Check if linked list is empty.
    return this.size === 0;
  }

  getSize() {
    // Returns the size of linked list.
    return this.size;
  }

  // Time complexity : O(1)
  prepend(value) {
    // Add a node to the start of linked list.
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // Time complexity : O(n)
  append(value) {
    // Add a node to the end of linked list.
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

  // Time complexity : O(n)
  insert(value, index) {
    // Add a node at any index in the linked list.
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 1; i < index; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  // Time complexity : O(n)
  removeFrom(index) {
    // Removing a node from any index in a linked list.
    if (index < 0 || index > this.size) {
      return;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
      removedNode.next = null;
    } else {
      let prev = this.head;
      for (let i = 1; i < index; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
      removedNode.next = null;
    }
    this.size--;
    return removedNode.value;
  }

  // Time complexity : O(n)
  removeValue(value) {
    // Case 1: List is empty.
    if (this.isEmpty()) {
      return null;
    }
    // Case 2: Head node has the value to be removed.
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      // Case 3: Find the node & remove it if it exists else return null.
      let removedNode = null,
        prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      // Case 3a: Element is found in linked list.
      if (prev.next) {
        removedNode = prev.next;
        prev.next = removedNode.next;
        removedNode.next = null;
        this.size--;
        return value;
      }
      // Case 3b: Element is not found in linked list.
      return null;
    }
  }

  // Time complexity : O(n)
  search(value) {
    // Search for a value in linked list.
    if (this.isEmpty()) {
      return -1;
    } else {
      let i = 0;
      let cur = this.head;
      while (cur) {
        if (cur.value === value) {
          return i;
        }
        i++;
        cur = cur.next;
      }
      return -1;
    }
  }

  // Time complexity : O(n)
  reverse() {
    let cur = this.head,
      prev = null;
    while (cur) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    this.head = prev;
  }

  // Time complexity : O(n)
  print() {
    // Printing nodes in a linked list.
    if (this.isEmpty()) {
      console.log("Linked list is empty !");
    } else {
      let cur = this.head;
      let listValues = "";
      while (cur) {
        listValues = listValues + `${cur.value} `;
        cur = cur.next;
      }
      console.log(listValues, "\n");
    }
  }
}

const linkedList = new LinkedList();
console.log("Size of linked-list :", linkedList.getSize(), "\n");
console.log("Is linked-list empty :", linkedList.isEmpty(), "\n");

console.log("Linked list after prepending 3 elements");
linkedList.prepend(30);
linkedList.prepend(20);
linkedList.prepend(10);

linkedList.print();

console.log("Linked list after appending 3 elements");
linkedList.append(40);
linkedList.append(50);
linkedList.append(60);

linkedList.print();

console.log("Linked list after inserting elements at index 0, 1, 2");
linkedList.insert(5, 0);
linkedList.insert(15, 1);
linkedList.insert(25, 2);

linkedList.print();

console.log("Linked list after removing elements at index 0, 1, 2");
linkedList.removeFrom(2);
linkedList.removeFrom(1);
linkedList.removeFrom(0);

linkedList.print();

console.log("Linked list after removing elements with values 40, 50, 60");
linkedList.removeValue(40);
linkedList.removeValue(50);
linkedList.removeValue(60);

linkedList.print();

console.log("Element 10 is at index :", linkedList.search(10));
console.log("Element 20 is at index :", linkedList.search(20));
console.log("Element 30 is at index :", linkedList.search(30));

linkedList.reverse();
console.log("\nReversed linked list :");
linkedList.print();
