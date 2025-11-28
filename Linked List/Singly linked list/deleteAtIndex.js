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
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
  print(){
    if(!this.head){
      console.error("No List found")
      return
    }
    let current=this.head
    let list=''
    while(current){
      list+=current.data
      if(current.next!==null){
        list+='->'
      }
      current=current.next
    }
    console.log(list)
  }
  deleteAtPosition(index) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid index");
      return;
    }
    let previous
    let current=this.head

    if(index===0){
        this.head=current.next
        return
    }
    for(let i=0;i<index;i++){
        previous=current
        current=current.next
    }
    previous.next=current.next

  }
}

let arr = [10, 5, 8, 42, 45, 19, 75, 28, 12, 24, 54, 1, 0];
const list = new LinkedList();
arr.forEach((x) => list.addAtStart(x));

list.print()
list.deleteAtPosition(3)
console.log('After deleting the index')
list.print()

