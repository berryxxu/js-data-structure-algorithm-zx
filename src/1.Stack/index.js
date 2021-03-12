//test stack\

console.log("test stack start");

import Stack from "./stack";
const stack = new Stack();

stack.push("abc");
stack.push("cba");
stack.push("npc");
stack.push("mpa");
stack.push("xxx");

console.log(stack.items);

//测试出栈
console.log(stack.pop());
console.log(stack.items);

//测试peek
console.log(stack.peek());
console.log(stack.items);

//测试其他
console.log(stack.isEmpty());
console.log(stack.size());

//测试十进制转化二进制
import dec2bin from "./decimal2binary";

console.log(dec2bin(10));
console.log(dec2bin(100));
console.log(dec2bin(8));
