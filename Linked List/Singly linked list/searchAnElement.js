class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = null;
  }

  addAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  print() {
    if (!this.head) {
      console.error("No List found");
      return;
    }
    let current = this.head;
    let list = "";
    while (current) {
      list += current.data;
      if (current.next !== null) {
        list += "->";
      }
      current = current.next;
    }
    console.log(list);
  }
  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      current = current.next;
      count++;
    }
    return count;
  }
  searchData(data) {
    if (!this.head) {
      console.error("NO list found");
      return;
    }

    let current = this.head;
    let isFound = false;
    let position;
    for (let i = 0; i < this.size(); i++) {
      if (data === current.data) {
        isFound = true;
        position = i;
      }
      current = current.next;
    }
    if (isFound) {
      console.log(`${data} found at ${position} th position`);
    } else {
      console.log(`${data} not found`);
    }
  }
}

const list = new LinkedList();
let arr=[-10,25,4,78,2,1,79,254,112]
arr.forEach(x=>list.addAtEnd(x))
console.log("List");
list.print();
list.searchData(5);
