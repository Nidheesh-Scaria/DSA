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

  addAtStart(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  print() {
    let output = "";
    let current = this.head;
    while (current !== null) {
      output += current.data;
      if (current.next !== null) {
        output += "->";
      }
      current = current.next;
    }
    console.log(output);
  }
  reverseList() {
    if (!this.head) return console.log("No list found");
    let current = this.head;
    let next = null;
    let prev = null;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}
let arr = [10, 5, 8, 42, 45, 19];
const list = new List();
arr.forEach((x) => list.addAtStart(x));
console.log("List before reversing")
list.print();
list.reverseList();
console.log("List after reversing")
list.print();
