export default class Stack {
  constructor() {
    this.items = [];
  }
  //   - `push()` 添加一个新元素到栈顶位置。
  push(item) {
    this.items.push(item);
  }
  // - `pop()` 移除栈顶的元素，同时返回被移除的元素。
  pop() {
    return this.items.pop();
  }
  // - `peek()` 返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）。
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }
  // - `isEmpty()` 如果栈里没有任何元素就返回 `true`，否则返回 `false`。
  isEmpty() {
    return this.items.length === 0;
  }
  // - `size()` 返回栈里的元素个数。这个方法和数组的 `length` 属性类似。
  size() {
    return this.items.length;
  }
  // - `toString()` 将栈结构的内容以字符串的形式返回。\
  toString() {
    let result = "";
    for (let item of this.items) {
      result += item + " ";
    }
    return result;
  }
}
//栈应该有的功能

//利用数组
