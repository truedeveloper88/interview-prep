class Node {
  constructor(key, value, next = null, prev = null) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }

  getNext() {
    return this.next;
  }

  setNext(toAdd) {
    this.next = toAdd;
  }

  getPrev() {
    return this.prev;
  }

  setPrev(toAdd) {
    this.prev = toAdd;
  }
}

class LRUCache {
  constructor(capacity) {
    this.map = {};
    this.head = null;
    this.tail = null;
    this.capacity = capacity;
  }

  appendToLinkedList(toAdd) {
    if (this.head === null) {
      this.head = toAdd;
    } else {
      this.tail.setNext(toAdd);
      toAdd.setPrev(this.tail);
    }
    this.tail = toAdd;
  }

  add(key, value) {
    const node = new Node(key, value);
    this.appendToLinkedList(node);
    this.map[key] = node;
  }

  read(key) {
    const node = this.map[key];
    if (node === undefined) return null;
    this.remove(key);
    this.add(node.key, node.value);
    return node.value;
  }

  write(key, value) {
    if (Object.keys(this.map).length === this.capacity) {
      this.remove(key);
    }
    this.add(key, value);
  }

  remove(key) {
    if (this.map[key] === undefined) return;
    const node = this.map[key];
    this.removeFromLinkedList(node);
    delete this.map[key];
  }

  removeFromLinkedList(toRemove) {
    if (toRemove.getPrev() !== null) {
      toRemove.getPrev().setNext(toRemove.getNext());
    }
    if (toRemove.getNext() !== null) {
      toRemove.getNext().setPrev(toRemove.getPrev());
    }

    if (toRemove === this.head) {
      this.head = toRemove.getNext();
    }
    if (toRemove === this.tail) {
      this.tail = toRemove.getPrev();
    }
  }
}

const cache = new LRUCache(5);

cache.write("nice", "good");
cache.write("good", "bye");
console.log(cache.read("nice"));
