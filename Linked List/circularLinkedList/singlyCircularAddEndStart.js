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
  print() {
    if (!this.head) return console.log("No list present");
    let current = this.head;
    let list = "";
    do {
      list += current.data;
      if (current.next !== this.head) list += "->";
      current = current.next;
    } while (current !== this.head);
    console.log(list);
  }
  addAtStart(data) {
    const newNode = new Node(data);
    if (!this.head) {
      newNode.next = newNode;
      this.head = newNode;
      return
    }
    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }
    current.next = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }
  addAtEnd(data){
    const newNode=new Node(data)
    if(!this.head){
        newNode.next=newNode
        this.head=newNode
        return
    }
    let current=this.head
    while(current.next!==this.head){
        current=current.next
    }
    current.next=newNode
    newNode.next=this.head
  }
}

let arr = [10, 5, 8, 42, 45, 19];
let arr2=[1,5,8,2,7,52,214,2,1]
const list = new CircularDoublyList();
const list2 = new CircularDoublyList();
arr.forEach((x) => list.addAtStart(x));
arr2.forEach(x=>list2.addAtEnd(x))
list.print()
list2.print();
