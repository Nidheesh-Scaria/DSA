class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
  }
  print() {
    if (!this.head) return console.log("No list Found");
    let current = this.head;
    let list = "";
    while (current) {
      list += current.data;
      if (current.next !== null) list += "->";
      current = current.next;
    }
    console.log(list);
  }
  addAtStart(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return
      }
      current = current.next;
    }
    newNode.next = this.head;
    this.head = newNode;
  }
}

let arr = [10, 5, 8, 42,,45, 45, 19, 10, 5, 8, 42];
const list = new List();
arr.forEach((x) => list.addAtStart(x));
list.print();
