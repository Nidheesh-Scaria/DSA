class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class CircularDoublyList {
  constructor() {
    this.head = null;
  }
  addAtStart(data) {
    const newNode = new Node(data);
    if (!this.head) {
      newNode.next = newNode;
      newNode.prev = newNode;
      this.head = newNode;
      return;
    }

    let last = this.head.prev;

    newNode.next = this.head;
    newNode.prev = last;

    last.next = newNode;
    this.head.prev = newNode;

    this.head = newNode;
  }
  print() {
    if (!this.head) return console.log("No list found");
    let list = "";
    let current = this.head;
    do {
      list += current.data;
      if (current.next !== this.head) list += "->";
      current = current.next;
    } while (current !== this.head);
    console.log(list);
  }
  printReverse() {
    if (!this.head) return console.log("No list found");
    let current = this.head.prev;
    let list=''
    do {
      list += current.data;
      current = current.prev;
      if (current !== this.head.prev) list += "->";
      
    } while (current !== this.head.prev);
    console.log(list);
  }
}

let arr = [10, 5, 8, 42, 45, 19];
const list = new CircularDoublyList();
arr.forEach((x) => list.addAtStart(x));
list.print();
list.printReverse()
