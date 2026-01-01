class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class CircularSinglyList{
    constructor(){
        this.head=null
    }
    addAtEnd(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            newNode.next=this.head
            return
        }
        let current=this.head
        while(current.next!==this.head){
            current=current.next
        }
        current.next=newNode
        newNode.next=this.head
    }
    print(){
        if(!this.head) return console.log("No list present")

        let current=this.head
        let list=''
        do{
            list+=current.data
            if(current.next!==this.head){
                list+='->'
            }
            current=current.next
        }while(current!==this.head)
        console.log(list)
    }
}

function isCircular(list){
    let head=list.head
    let fast=head
    let slow=head
    if(!head) return console.log("No list present")
    while(fast&&fast.next){
        slow=slow.next
        fast=fast.next.next
        if(slow===fast){
            console.log("Circular list")
            return
        }
    }
    console.log("Non circular list")
}

let arr = [10, 5, 8, 42, 45, 19];
const list = new CircularSinglyList();
arr.forEach((x) => list.addAtEnd(x));
list.print()
isCircular(list)
