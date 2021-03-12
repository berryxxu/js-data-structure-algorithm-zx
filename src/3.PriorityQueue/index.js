//测试优先级队列

// const { default: PriorityQueue } = require("./priorityqueue");

import PriorityQueue from "./priorityQueue";

console.log("test priority queue");

let pQueue = new PriorityQueue();
pQueue.enqueue("tom", 10);
pQueue.enqueue("bob", 5);
pQueue.enqueue("jerry", 234);
pQueue.enqueue("chris", 23);
pQueue.enqueue("jacky", 55);
pQueue.enqueue("lily", 1000);

console.log("size:", pQueue.size());
console.log("toString:", pQueue.toString());
