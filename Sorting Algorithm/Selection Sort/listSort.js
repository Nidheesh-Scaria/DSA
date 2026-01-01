class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
function print(head) {
  let current = head;
  let list = "";
  while (current) {
    list += current.data;
    if (current.next !== null) list += "->";
    current = current.next;
  }
  console.log(list);
}

let head = new Node(4);
head.next = new Node(2);
head.next.next = new Node(1);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(5);
function selectionSortLinkedList(head) {
  let current = head;
  while (current !== null) {
    let smallest = current;
    let nextNode = current.next;
    while (nextNode !== null) {
      if (smallest.data > nextNode.data) {
        smallest = nextNode;
      }
      nextNode = nextNode.next;
    }
    if (smallest !== current) {
      let temp = current.data;
      current.data = smallest.data;
      smallest.data = temp;
    }

    current = current.next;
  }
  return head;
}
let sorted = selectionSortLinkedList(head);
print(sorted);
