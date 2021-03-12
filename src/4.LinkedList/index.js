import { LinkedList } from "./linkedList";

const linkedList = new LinkedList();

console.log("test linked list");
console.log("--test append---");
linkedList.append("aaa");
linkedList.append("bbb");
linkedList.append("ccc");
linkedList.append("ddd");

console.log(
  "toString: ",
  linkedList.toString(),
  "length:",
  linkedList.length,
  "isEmpty",
  linkedList.isEmpty()
);

console.log("--test insert: 0-xxx, 2-yyy, 4-zzz---");
linkedList.insert(0, "xxx");
linkedList.insert(2, "yyy");
linkedList.insert(4, "zzz");

console.log(
  "toString: ",
  linkedList.toString(),
  "size:",
  linkedList.size(),
  "isEmpty",
  linkedList.isEmpty()
);

console.log("--test indexOf zzz---", linkedList.indexOf("zzz"));

console.log("--test get 5---", linkedList.get(5));
console.log("toString: ", linkedList.toString());

console.log("--test update 5---", linkedList.update(5, "newValue"));
console.log("toString: ", linkedList.toString());

console.log("--test removeAt 5---", linkedList.removeAt(5));
console.log("toString: ", linkedList.toString());

console.log("--test remove yyy---", linkedList.remove("yyy"));
console.log("toString: ", linkedList.toString());
