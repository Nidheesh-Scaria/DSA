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
    let current = this.head;
    let list = "";
    while (current) {
      list += current.data;
      if (current.next !== null) {
        list += "->";
      }
      current = current.next;
    }
    console.log(list);
  }
  addAtStart(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  middleElement() {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    console.log(slow.data);
  }
}

let arr = [10, 5, 8, 42, 45, 19, 75, 28, 12, 24, 54, 1, 0];
const list = new LinkedList();
arr.forEach((x) => list.addAtStart(x));
list.print();
list.middleElement();
