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

  append(data) {
    const newNode = new Node(data);
    
    newNode.next = this.head;
    this.head = newNode;
  }

  deleteStart() {
    let current = this.head;
    current = current.next;
    this.head = current;
  }
  print() {
    let current = this.head;
    let list = "";
    while (current) {
      list += current.data;
      if (current.next !== null) {
        list += "->";
      }
      current=current.next
    }
    console.log(list)
  }
}
 
const list = new LinkedList();

list.append(20);
list.append(30);
list.append(60);
list.append(80);
list.append(10);
list.append(350);
list.print();
list.deleteStart()
list.print();
 