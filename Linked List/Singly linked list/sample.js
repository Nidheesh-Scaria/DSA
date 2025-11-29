class Node{
    constructor(data){
        this.data=data
        this.next=null
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
    
}

let arr = [10, 5, 8, 42, 45, 19, 75];
const list = new LinkedList();
arr.forEach((x) => list.addAtStart(x));
list.print()
list.reversePrint()