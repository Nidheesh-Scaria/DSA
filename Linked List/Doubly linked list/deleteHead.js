class Node{
    constructor(data){
        this.data=data
        this.previous=null
        this.next=null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null
    }
    print(){
        let list=''
        let current=this.head
        while(current){
            list+=current.data
            if(current.next!==null){
                list+='->'
            }
            current=current.next
        }
        console.log(list)
    }

    addAtHead(data){
        const newNode= new Node(data)
        if(!this.head){
            this.head=newNode
            return
        }
        this.head.previous=newNode
        newNode.next=this.head
        this.head=newNode
    }
    deleteHead(){
        let current=this.head.next
        current.previous=null
        this.head=current
    }
}

let arr = [10, 5, 8, 42, 45, 19, 75, 28, 12, 24, 54, 1, 25,35];
const list = new DoublyLinkedList();
arr.forEach((x) => list.addAtHead(x))
list.print()
list.deleteHead()
list.print()