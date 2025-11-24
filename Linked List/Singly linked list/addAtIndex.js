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

  addAtStart(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
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

  insertAtIndex(data, index) {
    //cheking the index
    if (index < 0 || index > this.size()) {
      console.error("Invalid index number");
      return;
    }
    const newNode = new Node(data);
    //if index is 0 insertion at head
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    //setting current as head
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      //setting the current to next until the condition breaks
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }
  print() {
    let current = this.head;
    let list = "";
    while (current) {
      list += current.data;
      if (current.next !== null) {
        list += " -> ";
      }
      current = current.next;
    }
    console.log(list);
  }
}

const list = new LinkedList();
list.addAtStart(10);
list.addAtStart(20);
list.addAtStart(30);
list.addAtStart(40);
list.addAtStart(50);
list.addAtStart(60);
list.addAtStart(70);
list.addAtStart(80);
list.addAtStart(90);
list.addAtStart(100);

list.print();
list.insertAtIndex(25, 4);
list.print();
