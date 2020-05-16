class findMax {
  constructor() {
    this.s1 = [];
    this.maxes = [];
    this.maxSoFar = -Infinity;
  }

  push(value) {
    this.maxSoFar = Math.max(this.maxSoFar, value);
    if (this.maxSoFar !== this.maxes[this.maxes.length - 1]) {
      this.maxes.push(this.maxSoFar);
    }
    this.s1.push(value);
  }

  pop() {
    if (this.s1.length === 0) return null;
    const lastItem = this.s1.pop();
    const max = this.maxes[this.maxes.length - 1];

    if (lastItem === max) {
      this.maxes.pop();
      this.maxSoFar = this.maxes[this.maxes.length - 1];
    }
    console.log(this);
  }

  max() {
    if (this.maxes.length === 0) return null;
    return this.maxes[this.maxes.length - 1];
  }
}

const container = new findMax();

container.push(1);
container.push(2);
container.push(3);

container.push(5);
container.push(4);
container.pop();
container.pop();

console.log(container.max());
