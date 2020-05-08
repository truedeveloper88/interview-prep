class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.head) {
      let currentNode = this.head;
      while (currentNode && currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
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

const list = new SinglyLinkedList();
list.insert(1);
list.insert(2);
list.insert(3);

for (const item of list) {
  console.log(item);
}
