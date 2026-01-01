class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class List {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  print() {
    let current = this.head;
    let list = "";
    while (current) {
      list += current.data;
      if (current.next !== null) list += "->";
      current = current.next;
    }
    console.log(list);
  }
}

function mergeNsorted(list1, list2) {
  let dummy = new Node(0);
  let tail = dummy;
  while (list1 && list2) {
    if (list1.data <= list2.data) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  tail.next = list1 ? list1 : list2;
  return dummy.next;
}
function print(list){
  let current=list
  if(!current) return console.log("No list found")
  let out=''
  while(current){
    out+=current.data
    if(current.next!==null) out+='-->'
    current=current.next
  }
  console.log(out)
}

let arr1 = [1, 2, 4];
let arr2 = [1, 3, 4];

let list1 = new List();
let list2 = new List();
arr1.forEach((x) => list1.add(x));
arr2.forEach((x) => list2.add(x));
console.log("List-1");
list1.print();
console.log("List-2");
list2.print();
const sorted=mergeNsorted(list1.head, list2.head)
print(sorted)
