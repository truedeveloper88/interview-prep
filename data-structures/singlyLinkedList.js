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

  insertTail(value) {
    const newNode = new Node(value, null);
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

  insertHead(value) {
    const newNode = new Node(value, null);
    newNode.next = this.head;
    this.head = newNode;
  }

  deleteHead() {
    if (this.head) {
      let head = this.head;
      this.head = head.next;
      head = null;
    } else {
      throw new Error("the list is empty");
    }
  }

  deleteTail() {
    if (this.head && this.head.next) {
      let currentNode = this.head;
      while (currentNode.next !== null && currentNode.next.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode;
    } else if (this.head) {
      this.head = null;
      this.tail = null;
    } else {
      throw new Error("this list is empty");
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
list.insertTail(1);
list.insertTail(2);
list.insertTail(3);

list.deleteHead();
list.deleteHead();
list.deleteHead();
list.deleteHead();
for (const item of list) {
  console.log(item);
}
