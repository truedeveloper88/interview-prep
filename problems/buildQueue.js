class Stack {
  constructor() {
    this.stack = [];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }
}

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(value) {
    this.s1.push(value);
  }

  dequeue() {
    if (this.s2.isEmpty()) {
      this.flush();
    }
    if (this.s2.isEmpty()) {
      throw new Error("the list is empty");
    }
    return this.s2.pop();
  }

  flush() {
    while (!this.s1.isEmpty()) {
      this.s2.push(this.s1.pop());
    }
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());
