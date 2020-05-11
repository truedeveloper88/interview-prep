class Node {
  constructor(value, next = null) {
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

const linkedList = new LinkedList();
for (let i = 1; i < 10; i += 1) {
  linkedList.insert(i);
}
let nodeToDelete = null;
let prevNodeToDelete = null;
let current = linkedList.head;
while (current) {
  if (current.value === 8) {
    prevNodeToDelete = current;
    nodeToDelete = current.next;
  }
  current = current.next;
}

function deleteNode(list, nodeToDelete, prevNodeToDelete) {
  const head = list.head;
  const tail = list.tail;
  if (nodeToDelete === null) {
    return;
  }
  if (nodeToDelete === head) {
    list.head = nodeToDelete.next;
  }
  if (nodeToDelete === tail) {
    this.tail = prevNodeToDelete;
  }
  if (prevNodeToDelete !== null) {
    prevNodeToDelete.next = nodeToDelete.next;
  }
}

deleteNode(linkedList, nodeToDelete, prevNodeToDelete);

for (const item of linkedList) {
  console.log(item);
}
