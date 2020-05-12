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

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  reverse(node) {
    let prev = null;
    let current = node;
    while (current !== null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }

  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }

  findMedian() {
    let fastPoiner = this.head;
    let slowPointer = this.head;
    while (fastPoiner) {
      fastPoiner = fastPoiner.next;
      if (fastPoiner === null) {
        break;
      }
      fastPoiner = fastPoiner.next;
      slowPointer = slowPointer.next;
    }
    return slowPointer;
  }

  isPalindrome() {
    let start = this.head;
    const median = this.findMedian();
    let last = this.reverse(median);
    while (start !== null && last !== null) {
      if (start.value !== last.value) return false;
      start = start.next;
      last = last.next;
    }
    return true;
  }
}

const linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(2);
linkedList.add(1);

const median = linkedList.findMedian();

console.log(linkedList.isPalindrome());
