class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }
  print() {
    let list = "";
    let current = this.head;
    while (current) {
      list += current.data;
      if (current.next != null) {
        list += "->";
      }
      current = current.next;
    }
    console.log(list);
  }
  addAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
      
    }
    current.next=newNode
    newNode.previous=current
  }
  deleteEnd(){
    if(this.head.next===null){
        this.head=null
        return
    }
    let previous
    let current=this.head
    while(current.next!==null){
        previous=current
        current=current.next
    }
    previous.next=null
    current.previous=null
  }
}

let arr = [1, 2, 3, 4, 56, 6];
const list = new DoublyLinkedList();
arr.forEach((x) => list.addAtEnd(x));

list.addAtEnd(560)
list.print()
list.deleteEnd()
list.print()