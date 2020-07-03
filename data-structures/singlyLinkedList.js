class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  getNext() {
    return this.next;
  }

  setNext(next) {
    this.next = next;
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addFirst(value) {
    this.head = new Node(value, this.head);
    if (this.size === 0) {
      this.tail = this.head;
    }
    this.size += 1;
  }

  addLast(value) {
    const newNode = new Node(value);
    if (this.tail) {
      this.tail.setNext(newNode);
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.size += 1;
  }

  removeFirst() {
    if (this.head === null) {
      return null;
    }
    const answer = this.head.getValue();
    this.head = this.head.getNext();
    this.size -= 1;
    if (this.size === 0) {
      this.tail = null;
    }
    return answer;
  }
}
