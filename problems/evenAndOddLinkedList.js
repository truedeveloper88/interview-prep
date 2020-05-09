class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(value) {
    const newNode = new Node(value, null);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  append(list) {
    if (this.head) {
      let current = list.head;
      while (current) {
        this.insert(current.value);
        current = current.next;
      }
    } else {
      this.head = list.head;
      this.tail = list.tail;
    }
  }

  *[Symbol.iterator]() {
    let currentNode = this.head;
    while (currentNode) {
      yield currentNode.value;
      currentNode = currentNode.next;
    }
  }
}

function oddEvenLinkedList(list) {
  const oddList = new LinkedList();
  const evenList = new LinkedList();
  let current = list.head;
  while (current) {
    if (current.value % 2 === 0) {
      evenList.insert(current.value);
    } else if (current.value % 2 === 1) {
      oddList.insert(current.value);
    }
    current = current.next;
  }
  oddList.append(evenList);
  return oddList;
}

const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);

for (const item of oddEvenLinkedList(list)) {
  console.log(item);
}
