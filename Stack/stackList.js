//singly

class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class Stack{
    constructor(){
        this.head=null
    }
    push(data){
        const newNode=new Node(data)
        newNode.next=this.head
        this.head=newNode
    }
    pop(){
        if(!this.head) return console.log("Stack underflow")
        let value=this.head.data
        this.head=this.head.next
        return value
    }
    peek(){
        if(!this.head) return console.log("Stack underflow")
        return this.head.data
    }
    display(){
        if(!this.head) return console.log("Stack underflow")
        let current=this.head
        let stack=''
        while(current){
            stack+=current.data
            if(current.next!==null) stack+='<-'
            current=current.next
        }
        console.log(stack)
    }

}

let stack = new Stack();
stack.push(4);
stack.push(24);
stack.push(1);
stack.push(5);
stack.push(6);
stack.push(8);
console.log("Stcak")
stack.display();
console.log("Top element");
console.log(stack.peek());
stack.pop();
stack.pop();
console.log("After two pop operation");
stack.display();


//Doubly

class doublyNode{
    constructor(data){
        this.data=data
        this.next=null
        this.prev=null
    }

}
class stackDoublyList{
    constructor(){
        this.head=null
    }
    push(data){
        const newNode=new doublyNode(data)
        if(!this.head){
            this.head=newNode
            return
        }
        newNode.next=this.head
        this.head.prev=newNode
        this.head=newNode
    }
    pop(){
        let data=this.head.data
        let current=this.head
        current=current.next
        this.head=current
        current.prev=null
        return data
    }
    peek(){
        if(!this.head) return console.log("List underFlow")
        return this.head.data
    }
    display(){
        if(!this.head) return console.log("Stack underflow")
        let current=this.head
        let stack=''
        while(current){
            stack+=current.data
            if(current.next!==null) stack+='<-'
            current=current.next
        }
        console.log(stack)
    }
}
console.log("Doubly linked list")
let doublyStack = new stackDoublyList();
doublyStack.push(4);
doublyStack.push(24);
doublyStack.push(1);
doublyStack.push(5);
doublyStack.push(6);
doublyStack.push(8);
console.log("Stack")
doublyStack.display();
console.log("Top element");
console.log(doublyStack.peek());
doublyStack.pop();
doublyStack.pop();
console.log("After two pop operation");
doublyStack.display();

