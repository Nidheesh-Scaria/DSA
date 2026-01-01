class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class CircularSinglyList {
  constructor() {
    this.head = null;
  }
  addAtStart(data) {
    const newNode = new Node(data);
    if (!this.head) {
      newNode.next = newNode;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }
    current.next = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }
  print() {
    if (!this.head) {
      console.log("No list present");
    }
    let list = "";
    let current = this.head;
    do {
      list += current.data;
      if (current.next !== this.head) {
        list += "->";
      }
      current = current.next;
    } while (current !== this.head);
    console.log(list);
  }
}

function isCircular(list) {
  let head = list.head;
  if (!head) return console.log("List is empty");
  let fast = head;
  let slow = head;
  
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      console.log("Circualr list");
      return;
    }
  }

  console.log("Non circular list");
}

let arr = [10, 5, 8, 42, 45, 19];
const list = new CircularDoublyList();
arr.forEach((x) => list.addAtStart(x));

list.print();
isCircular(list);
