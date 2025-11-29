class Node {
  constructor(data) {
    // 1. Stores the actual data (or value)
    this.data = data;
    // 2. Stores the reference (pointer) to the next node.
    // It is initialized to null because a new node starts unlinked.
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Inserts a new node at the beginning of the list (O(1) operation).
  addAtStart(data) {
    // 1. Create the new node
    const newNode = new Node(data);
    //setting the address of head to new node
    newNode.next = this.head;
    //setting the new node as head
    this.head = newNode;
  }

  //print a linked list
  printNode() {
    let output = "";
    let current = this.head;
    // 2. Loop until the current pointer is null (the end of the list)
    while (current !== null) {
      output += current.data;
      if (current.next !== null) {
        output += "->";
      }
      //move to next node
      current = current.next;
    }
    console.log(output);
  }
  reversePrint() {
    let list = [];
    let current = this.head;
    while (current) {
      list.push(current.data);

      current = current.next;
    }
    console.log(list.reverse().join("-> "));
  }
}

const obj = new LinkedList();
obj.addAtStart(20);
obj.addAtStart(30);
obj.addAtStart(40);
obj.addAtStart(60);
obj.addAtStart(70);
obj.printNode();
obj.addAtStart(80);
obj.insertAtIndex(10, 2);
obj.printNode();
obj.reversePrint()
