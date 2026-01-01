class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
function print(head){
    let current=head
    let list=''
    while(current){
        list+=current.data
        if(current.next!==null) list+='->'
        current=current.next
    }
    console.log(list)
}


let head = new Node(4);
head.next = new Node(2);
head.next.next = new Node(1);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(5);
function bubbleSortLinkedList(head){
    let swapped=true
    do{
        let current=head
        swapped=false
        while(current.next!==null){
            if(current.data>current.next.data){
                let temp=current.data
                current.data=current.next.data
                current.next.data=temp
                swapped=true
            }
            current=current.next
        }
        
    }while(swapped)
    return head
   
}
let sorted=bubbleSortLinkedList(head)
print(sorted)