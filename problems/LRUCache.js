class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor(capacity) {
    this.head = null;
    this.tail = null;
    this.capacity = capacity;
    this.length = 0;
  }

  hasReachedCapacity() {
    return this.length === this.capacity;
  }

  insert(value) {
    const node = new Node(value);
    if (this.head) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    } else {
      this.tail = node;
      this.head = node;
      node.next = null;
    }
    this.length += 1;
    return node;
  }

  moveToHead(node) {
    if (node === this.head) return;
    if (node === this.tail) {
      node.prev.next = null;
      this.tail = node.prev;
    } else {
      node.prev.next = node.next;
      try {
        node.next.prev = node.prev;
      } catch (err) {
        console.log(node);
      }
    }
    node.next = this.head;
    this.head.prev = node;
    node.prev = null;
    this.head = node;
  }

  moveTotail(node) {
    if (node === this.tail) {
      return;
    }

    if (node === this.head) {
      this.head = node.next;
      this.head.prev = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    this.tail.next = node;
    node.next = null;
    node.prev = this.tail;
    this.tail = node;
  }

  remove(node) {
    if (this.head === null || this.tail === null || this.length === 0) {
      throw new Error("the list is empty");
    }
    if (node === this.head) {
      let next = node.next;
      if (next === null) {
        this.head = null;
        this.tail = null;
      } else {
        next.prev = null;
        this.head = next;
      }
    } else if (node === this.tail) {
      let prev = this.tail.prev;
      if (prev === null) {
        this.tail = null;
        this.head = null;
      } else {
        prev.next = null;
        this.tail = prev;
      }
    } else {
      let prev = node.prev;
      let next = node.next;
      prev.next = next;
      next.prev = prev;
    }
    this.length -= 1;
    return node.value;
  }

  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}

class LRUCache {
  constructor(capacity) {
    this.map = {};
    this.linkedList = new DoublyLinkedList(capacity);
  }

  write(key, value) {
    if (this.map[key]) {
      const node = this.map[key];
      node.value = value;
      this.linkedList.moveToHead(node);
      return node.value;
    }
    if (this.linkedList.hasReachedCapacity()) {
      const deleteKey = this.linkedList.remove(this.linkedList.tail);
      delete this.map[deleteKey];
    }
    const node = this.linkedList.insert(value);
    this.map[key] = node;
    return node.value;
  }

  read(key) {
    if (this.map[key]) {
      const node = this.map[key];
      delete this.map[key];
      this.linkedList.moveToHead(node);
      return node.value;
    }
    return undefined;
  }

  print() {
    for (const item of this.linkedList) {
      console.log(item);
    }
    console.log(Object.keys(this.map));
  }
}

const cache = new LRUCache(5);

const data = [1, 2, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8];

data.forEach((item) => cache.write(item, item));
