class WordsIndex {
  constructor(docs) {
    this.wordsList = this.processChars(docs);
  }

  processChars(docs) {
    let list = [];
    let word = "";
    let startingIndex;
    for (let i = 0; i < docs.length; i += 1) {
      const charCode = docs.charCodeAt(i);
      if (word === "") {
        startingIndex = i;
      }

      if (charCode >= 97 && charCode <= 122) {
        word += docs[i];
      } else {
        if (word === "") continue;
        list.push([word, startingIndex]);
        word = "";
      }
    }
    if (word.length > 0 && startingIndex) {
      list.push([word, startingIndex]);
    }
    return list;
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.wordsList.length; i += 1) {
      yield [this.wordsList[i][0], this.wordsList[i][1]];
    }
  }
}

const wordList = new WordsIndex(
  "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting ​of​ a main clause​and​ sometimes ​one​ or more subordinate clauses"
);

class Node {
  constructor(key, value, prev = null, next = null) {
    this.key = key;
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

  getNext() {
    return this.next;
  }

  getPrev() {
    return this.prev;
  }

  setNext(next) {
    this.next = next;
  }

  setPrev(prev) {
    this.prev = prev;
  }
}

class ShortestSubarrayString {
  constructor(s, docs) {
    this.wordList = new WordsIndex(docs);
    this.head = null;
    this.tail = null;
    this.map = {};
    this.s = s;
    this.capacity = this.s.length;
    this.result = "";
    this.length = 0;
    this.docs = docs;
  }

  process() {
    for (const [word, index] of this.wordList) {
      if (this.s.includes(word)) {
        if (this.map[word] !== undefined) {
          this.remove(word);
        }
        this.add(word, index);
        if (Object.keys(this.map).length === this.s.length) {
          const startIndex = this.head.value;
          const endIndex = this.tail.value + this.tail.key.length - 1;
          console.log(startIndex, endIndex);
          if (
            this.result === "" ||
            endIndex - startIndex < this.result.length
          ) {
            this.result = this.docs.slice(startIndex, endIndex + 1);
          }
        }
      }
    }
    return this.result;
  }

  add(key, value) {
    const node = new Node(key, value);

    this.appendToLinkedList(node);
    this.map[key] = node;
  }

  remove(key) {
    if (this.map[key] === undefined) return;
    const node = this.map[key];
    this.removeFromLinkedList(node);
    delete this.map[key];
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

const S = ["and", "of", "one"];
const docs =
  "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses";

const sss = new ShortestSubarrayString(S, docs);

console.log(sss.process());
