class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }
  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
  print() {
    let list = "";
    let current = this.head;
    while (current) {
      list += current.data;
      if (current.next !== null) {
        list += "->";
      }
      current = current.next;
    }
    console.log(list);
  }
  addAtHead(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }
  addAtIndex(data, index) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid index");
      return;
    }
    const newNode = new Node(data);
    if (index === 0) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next.previous = newNode;
    newNode.previous = current;
    current.next = newNode;
  }
  reverePrinting() {
    let current = this.head;
    while (current && current.next !== null) {
      current = current.next;
    }
    let list = "";
    while (current) {
      list += current.data;
      if (current.previous !== null) {
        list += "->";
      }
      current = current.previous;
    }
    console.log(list);
  }
}

let arr = [75, 28, 12, , 24, 54, 1, 25, 35];
const list = new DoublyLinkedList();
arr.forEach((x) => list.addAtHead(x));
list.print();
list.reverePrinting();
list.addAtIndex(10, 5);
list.print();
list.reverePrinting();
