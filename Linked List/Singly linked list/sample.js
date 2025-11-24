class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
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
  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  append(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  atIndex(data, index) {
    console.log("hai");

    if (index < 0 || index > this.size()) {
      console.error("Invalid index number");
      return;
    }
    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }
  pop() {
    let current = this.head;
    let previous;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
  }
  shift() {
    let current = this.head;
    this.head = current.next;
  }
  deleteAtPostion(index) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid index");
      return;
    }

    let current = this.head;
    let previous;
    if (index === 0) {
      this.head=current.next;
      return
    }
    // 1 2 3 4 50 6 7 8 9
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
  }
}

const list = new LinkedList();

list.append(25);
list.push(35);
list.push(65);
list.append(15);
list.append(5);
list.push(25);
list.push(95);
list.push(-85);
list.append(-95);
console.log("complete list");
list.print();
list.shift();
console.log("deleting at start");
list.print();
console.log("deleting at end");
list.pop();
list.print();
console.log("insert at index");
list.atIndex(-10, 4);
list.print();
console.log("delete at index");
list.deleteAtPostion(0);
list.print();
