class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
    constructor(){
        this.head=null
    }
    addAtStart(data){
        const newNode=new Node(data)
        newNode.next=this.head
        this.head=newNode
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
    
    deleteSpecificData(data){
    
        let current=this.head
        let previous
        while(current){
            previous=current
            current=current.next
            if(current.data===data){
                previous.next=current.next
                return
            }
        }
    }
}

const list = new LinkedList();
let arr=[-10,25,4,78,2,1,79,254,112]
arr.forEach(x=>list.addAtStart(x))
list.print()
list.deleteSpecificData(2)
list.print()