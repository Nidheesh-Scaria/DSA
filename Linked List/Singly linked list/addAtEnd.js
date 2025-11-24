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

  // Inserts a new node at the end of the list (O(1) operation).
  insertAtEnd(data) {
    //creating a node
    const newNode = new Node(data);
    //cheking the head(if node exists or not)
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    //cheking the current.next is null ot=r not
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  print(){
    let current=this.head
    let list=''
    while(current){
        list+=current.data
        if(current.next!==null){
            list+=' -> '
        }
        current=current.next
    }
    console.log(list)
  }

}


const list=new LinkedList()
  
list.insertAtEnd(20)
list.insertAtEnd(30)
list.insertAtEnd(60)
list.insertAtEnd(80)
list.insertAtEnd(10)
list.insertAtEnd(350)
list.print()
