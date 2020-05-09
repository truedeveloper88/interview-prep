class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const head = new Node(
  0,
  new Node(
    2,
    new Node(0, new Node(1, new Node(0, new Node(2, new Node(1, null)))))
  )
);

function append(head, newList) {
  let currentNode = head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }

  currentNode.next = newList;
}

function sortList(head) {
  let twoList;
  let oneList;
  let zeroList;
  let currentNode = head;
  while (currentNode) {
    if (currentNode.value === 2) {
      if (twoList === undefined) {
        twoList = new Node(2, null);
      } else {
        twoList.next = new Node(2, null);
      }
    } else if (currentNode.value === 1) {
      if (oneList === undefined) {
        oneList = new Node(1, null);
      } else {
        oneList.next = new Node(1, null);
      }
    } else if (currentNode.value === 0) {
      if (zeroList === undefined) {
        zeroList = new Node(0, null);
      } else {
        zeroList.next = new Node(0, null);
      }
    }
    currentNode = currentNode.next;
  }
  append(oneList, zeroList);
  append(twoList, oneList);

  return twoList;
}

const list = sortList(head);

function printList(head) {
  let current = head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

printList(head);
