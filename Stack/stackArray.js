class Stack{
    constructor(){
        this.items=[]
    }
    display(){
        console.log(this.items.join('<-'))
    }
    push(data){
        this.items.push(data)
    }
    pop(){
        if(this.items.length<=0) return console.log("Stack is empty")
        this.items.pop()
    }
    peek(){
        console.log(this.items[this.items.length-1])
    }
    size(){
        console.log(this.items.length)
    }
    
}

let stack=new Stack()
let arr=[10,20,30,40,50,60]
arr.forEach(x=>stack.push(x))
stack.display()//10<-20<-30<-40<-50<-60
stack.size()//6
stack.pop()
stack.display()//10<-20<-30<-40<-50
stack.peek()//50
