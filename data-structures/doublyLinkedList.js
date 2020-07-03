class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }

  getNext() {
    return this.next;
  }

  setNext(next) {
    this.next = next;
  }

  getPrev() {
    return this.prev;
  }

  setPrev(prev) {
    this.prev = prev;
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }
}

class DoublylinkedList {
  constructor() {
    this.head = new Node(null, null, null);
    this.tail = new Node(null, null, this.head);
    this.head.setNext(this.tail);
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  first() {
    if (this.head.next === null) return null;
    return this.head.next;
  }

  last() {
    if (this.tail.prev === null) return null;
    return this.tail.prev;
  }

  *[Symbol.iterator]() {
    let current = this.head.getNext();
    while (current !== this.tail) {
      yield current.getValue();
      current = current.getNext();
    }
  }

  addFirst(value) {
    this.addBetween(value, this.head, this.head.getNext());
  }

  addLast(value) {
    this.addFirst(value, this.tail.getPrev(), this.tail);
  }

  removeFirst() {
    if (this.isEmpty()) return null;
    this.remove(this.head.getNext());
  }

  removeLast() {
    if (this.isEmpty()) return null;
    this.remove(this.tail.getPrev());
  }

  remove(node) {
    let predecessor = node.getPrev();
    let successor = node.getNext();
    predecessor.setNext(successor);
    successor.setPrev(predecessor);
    this.size -= 1;
    return node.element;
  }

  addBetween(e, predecessor, successor) {
    const newNode = new Node(e, successor, predecessor);
    predecessor.setNext(newNode);
    successor.setPrev(newNode);
    this.size += 1;
  }
}

const list = new DoublylinkedList();
list.addFirst("A");
list.addFirst("B");
list.addFirst("C");

for (const item of list) {
  console.log(item);
}
