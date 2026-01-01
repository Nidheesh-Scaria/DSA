class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
  }
}

class List {
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
  reverseList(){
    let temp
    let current=this.head
    while(current!==null){
        temp=current.previous
        current.previous=current.next
        current.next=temp

        current=current.previous
    }
    if(temp!==null){
        this.head=temp.previous
    }
  }

}
let arr = [10, 5, 8, 42, 45, 19];
const list = new List();
arr.forEach((x) => list.addAtStart(x));
console.log("List before reversing")
list.print();
list.reverseList();
console.log("List after reversing")
list.print();