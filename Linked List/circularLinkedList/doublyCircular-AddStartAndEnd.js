class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class CircularDoublyList{
    constructor(){
        this.head=null
    }
    print(){
        if(!this.head) return console.log("No list present")
        let current=this.head
        let list=''
        do{
            list+=current.data
            if(current.next!==this.head) list+='->'
            current=current.next
        }while(current!==this.head)

        console.log(list)
    }
    printReverse(){
        if(!this.head) return console.log("No list present")
        let list=''
        let current=this.head.prev
        do{
            list+=current.data
            current=current.prev
            if(current!==this.head.prev) list+='->'

        }while(current!==this.head.prev)
        console.log(list)
    }

    addAtStart(data){
        const newNode=new Node(data)
        if(!this.head){
            newNode.next=newNode
            newNode.prev=newNode
            this.head=newNode
            return
        }
        let last=this.head.prev

        newNode.prev=last
        newNode.next=this.head

        last.next=newNode
        this.head.prev=newNode
        this.head=newNode
    }
    addAtEnd(data){
        const newNode=new Node(data)
        if(!this.head){
            newNode.next=newNode
            newNode.prev=newNode
            this.head=newNode
            return
        }
        let last=this.head.prev

        newNode.prev=last
        newNode.next=this.head

        last.next=newNode
        this.head.prev=newNode
    }
}

let arr1 = [10, 5, 8, 42, 45, 19];
let arr2=[1,5,8,2,7,52,214,2]
const list1 = new CircularDoublyList();
const list2 = new CircularDoublyList();
arr1.forEach((x) => list1.addAtStart(x));
arr2.forEach(x=>list2.addAtEnd(x))
list1.print()
list1.printReverse()
list2.print();
list2.printReverse()
