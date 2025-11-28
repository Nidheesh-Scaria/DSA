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
    let current = this.head;
    let list = "";
    while (current) {
      list += current.data;
      if (current.next !== null) {
        list += "->";
      }
      current = current.next;
    }
    console.log(list)
  }
  reversePrint(){
    let current=this.head
    let list=''
    while(current.next!==null){
        current=current.next
    }
    while(current){
        list+=current.data
        if(current.previous!==null){
            list+='->'
        }
        current=current.previous
    }
    console.log(list)

  }
  size(){
    let count=0;
    let current=this.head
    while(current){
        count++
        current=current.next
    }
    return count
  }
  addAtHead(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return
    }
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
  }
  deleteIndex(index){
    if(index<0 || index >this.size()){
        console.error("Invalid index")
        return
    }
    let current=this.head
    let previous
    if(index===0){
        this.head=current.next
        return
    }
    for(let i=0;i<index-1;i++){
        previous=current
        current=current.next
    }
    previous.next=current.next
    current.next.previous=previous
  }
}

let arr = [10, 28, 12, 24, 54, 1, 25,35];
const list = new DoublyLinkedList();
arr.forEach((x) => list.addAtHead(x))
list.print()
list.deleteIndex(5)
list.print()
list.reversePrint()