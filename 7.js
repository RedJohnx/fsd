// structure.js
export class Stack {
    constructor() { this.items = []; }
    push(element) { this.items.push(element); }
    pop() { return this.items.pop(); }
    peek() { return this.items[this.items.length - 1]; }
}

export class Queue {
    constructor() { this.items = []; }
    enqueue(element) { this.items.push(element); }
    dequeue() { return this.items.shift(); }
}

//main.js
import { Stack, Queue } from './structures.js';

let s = new Stack();
s.push(10);
console.log("Stack Pop:", s.pop());

let q = new Queue();
q.enqueue(20);
console.log("Queue Dequeue:", q.dequeue());