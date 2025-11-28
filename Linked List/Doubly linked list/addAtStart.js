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
  addAtStart(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
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
  reversePrint(){
      let current=this.head 
      let list=''
      while(current&&current.next!==null){
          current=current.next
      }
      while(current){
          list+=current.data
          if(current.previous!=null){
              list+='->'
          }
          current=current.previous
      }
      console.log(list)
  }

}

let arr = [10, 5, 8, 42, 45, 19, 75, 28, 12, 24, 54, 1, 0];
const list = new DoublyLinkedList();
arr.forEach((x) => list.addAtStart(x));
list.print();
list.reversePrint();
