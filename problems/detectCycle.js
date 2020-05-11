class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value, null);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current && current.next) {
        current = current.next;
      }
      current.next = newNode;
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

let nodeToLink = null;
let current = linkedList.head;
while (current && current.next) {
  if (current.value === 3) {
    nodeToLink = current;
  }
  current = current.next;
}

current.next = nodeToLink;

function detectCycle(list) {
  let fastPointer = list.head;
  let slowPointer = list.head;
  while (fastPointer !== null) {
    fastPointer = fastPointer.next;
    if (fastPointer === slowPointer) return true;
    fastPointer = fastPointer.next;
    if (fastPointer === slowPointer) return true;
    slowPointer = slowPointer.next;
  }
  return false;
}

function findCycleLength(list) {
  let intersection = null;
  let fastPointer = list;
  let slowPointer = list;
  while (fastPointer !== null) {
    fastPointer = fastPointer.next;
    if (fastPointer === slowPointer) {
      intersection = fastPointer;
      break;
    }
    fastPointer = fastPointer.next;
    if (fastPointer === slowPointer) {
      intersection = fastPointer;
      break;
    }
    slowPointer = slowPointer.next;
  }
  if (intersection === null) return 0;

  let current = intersection.next;
  let counter = 1;
  while (current) {
    current = current.next;
    counter += 1;
    if (current === intersection) break;
  }
  return counter;
}

function findCycleStartingNode(list) {
  const len = findCycleLength(list);

  let pointerA = list;
  let pointerB = list;
  for (let i = 0; i < len; i += 1) {
    console.log(pointerB.value);
    pointerB = pointerB.next;
  }
  while (pointerA !== pointerB) {
    pointerA = pointerA.next;
    pointerB = pointerB.next;
  }

  return pointerA;
}

function findTheMidianElement(list) {
  let fastPointer = list.head;
  let slowPointer = list.head;
  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next;
    fastPointer = fastPointer.next;
    slowPointer = slowPointer.next;
  }
  return slowPointer;
}

console.log(findCycleStartingNode(linkedList.head));
