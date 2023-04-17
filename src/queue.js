const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getUnderlyingList() {
    let current = this.head;
    let index = this.length;
    const list = {};

    while (index) {
      if (index === this.length) {
        list.value = current.value;
        list.next = current.next;
      } else {
        current = current.next;
        list.next = current;
        current = list;
      }

      index -= 1;
    }

    return list;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length += 1;
  }

  dequeue() {
    const current = this.head;
    this.head = this.head.next;
    this.length -= 1;

    return current.value;
  }
}

module.exports = {
  Queue,
};

const que = new Queue();
que.enqueue(2);
que.enqueue(4);
que.enqueue("bla");
console.log(que.getUnderlyingList());
