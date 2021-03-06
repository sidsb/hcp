import { BinaryHeap } from "./binaryheap.js";

export class PriorityQueue {
  constructor() {
    this.heap = new BinaryHeap();
  }
  enqueue(element) {
    this.heap.push(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      return "Failed to dequeue because: Priority Queue was empty.";
    } else {
      return this.heap.popMin();
    }
  }
  front() {
    if (this.isEmpty()) {
      return "Failed to get front element because: Priority Queue was empty";
    } else {
      return this.heap.find(0);
    }
  }
  rear() {
    if (this.isEmpty()) {
      return "Failed to get rear element because: Priority Queue was empty";
    } else {
      return this.heap.find(this.heap.size() - 1);
    }
  }
  containsNode(node) {
    return this.heap.find(node);
  }
  isEmpty() {
    return this.heap.size() == 0;
  }
  size() {
    return this.heap.size();
  }
  setDistance(node, distance) {
    this.heap.setDistance(node, distance);
  }
  setParent(neighbor, parent) {
    this.heap.setParent(neighbor, parent);
  }
  printPriorityQueue() {}
}
