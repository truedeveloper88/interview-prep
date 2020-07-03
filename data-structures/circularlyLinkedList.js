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

class CircularlyLinkedList {
  constructor() {
    this.tail = null;
  }

  empty() {
    return this.size === 0;
  }

  first() {
    if (this.empty()) {
      return null;
    }
    return this.tail.getNext().getValue();
  }

  last() {
    if (this.empty()) {
      return null;
    }
    return this.tail.getValue();
  }

  addLast(value) {
    this.addFirst(value);
    this.tail = this.tail.getNext();
  }

  rotate() {
    if (this.tail !== null) {
      this.tail = this.tail.getNext();
    }
  }

  removeFirst() {
    if (this.empty()) {
      return null;
    }

    const head = this.tail.getNext();
    if (this.tail === head) {
      this.tail = null;
    } else {
      this.tail.setNext(head.getNext());
    }
    this.size -= 1;
    return head.getValue();
  }

  addFirst(value) {
    if (this.empty()) {
      const newNode = new Node(value, null);
      this.tail = newNode;
      this.tail.setNext(this.tail);
    } else {
      const newNode = new Node(value, this.tail.getNext());
      this.tail.setNext(newNode);
    }
    this.size += 1;
  }

  rotate() {}
}
