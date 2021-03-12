import Queue from "./queue";

//test queue
const queue = new Queue();
console.log(queue);
console.log(queue.isEmpty(), queue.size());

queue.enqueue("aaa");
queue.enqueue("bbb");
queue.enqueue("cc");
queue.enqueue("dd");
queue.enqueue("ee");
queue.enqueue("ff");

console.log(queue);
console.log("toString", queue.toString());
console.log("isEmpty", queue.isEmpty(), "size", queue.size());

console.log("test dequeue", queue.dequeue());
console.log("toString", queue.toString());

console.log("test front", queue.front());
console.log("isEmpty", queue.isEmpty(), "size", queue.size());

//test 击鼓传花
import passGame from "./passGame.js";
const names = ["lily", "lucy", "tom", "tony", "jack"];
console.log("击鼓传花测试", passGame(names, 4));
