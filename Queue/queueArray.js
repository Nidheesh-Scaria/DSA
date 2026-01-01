class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(data){
        this.items.push(data)
    }
    dequeue(){
        if(this.isEmpty()) return console.log("Queue is underflow")
        this.items.shift()
    }
    front(){
        console.log(this.items[0])
    }
    isEmpty(){
        if(this.items.length>0) return false
        else return true
    }
    size(){
        console.log(this.items.length)
    }
    display(){
        console.log(this.items.join('->'))
    }
}


const queue=new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.enqueue(60)
console.log('Top element')
queue.front()
queue.display()
queue.dequeue()
console.log("Size of queue")
queue.size()
queue.display()
