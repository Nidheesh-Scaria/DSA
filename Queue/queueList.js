class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class queueList {
  constructor() {
    this.head = null;
    this.rear = null;
    this.length = 0;
  }
  display() {
    if (!this.head) return console.log("Queue underflow");
    let current = this.head;
    let list = "";
    while (current) {
      list += current.data;
      if (current.next !== null) list += "->";
      current = current.next;
    }
    console.log(list);
  }
  isEmpty() {
    return this.head === null;
  }
  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++
  }
  dequeue() {
    if (this.isEmpty()) return console.log("Queue Underflow");
    const removed=this.head
    this.head=this.head.next
    if(this.head===null) this.rear=null
    this.length--
    return removed.data
  }

  front() {
    if (this.isEmpty()) return "Queue is empty";
    return this.head.data
  }
}

const queue = new queueList();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
queue.enqueue(70);
queue.enqueue(80);
queue.display();
queue.dequeue();
queue.display();
console.log(queue.front());
