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

  addAtEnd(data) {
    const newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
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
    console.log(list)
  }

  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      current = current.next;
      count++;
    }
    return count;
  }

  deleteAtEnd() {
    let current = this.head;
    let previous;
    while (current.next != null) {
      previous = current;
      current = current.next;
    }
    previous.next=null
  }
}

const list=new LinkedList()
list.addAtEnd(20);
list.addAtEnd(30);
list.addAtEnd(60);
list.addAtEnd(80);
list.addAtEnd(10);
list.addAtEnd(350);
list.print();
list.deleteAtEnd()
list.print()