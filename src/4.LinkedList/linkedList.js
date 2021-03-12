//链表元素的类
export class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
/**
 *
 *
 * @export
 * @class LinkedList
 */
export class LinkedList {
  //链表初始化
  constructor() {
    //链表为空，head指向null
    this.head = null;
    this.length = 0;
  }

  // - `append(element)` 向链表尾部添加一个新的项。
  append(element) {
    //1.创建Node节点
    let node = new Node(element);

    //2.链表为空，直接插入
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.length += 1;
  }

  // - `insert(position, element)` 向链表的特定位置插入一个新的项。
  insert(position, element) {
    //1.越界判断
    if (position < 0 || position > this.length) return false;

    //2.创建节点
    const node = new Node(element);

    //3.在头部插入元素
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      //查找要插入位置的前一个元素
      let prev = this.head;
      let prevIndex = 1;

      while (prevIndex++ < position) {
        prev = prev.next;
      }
      //插入node的next指向它前一个元素原来的后一个元素
      node.next = prev.next;
      prev.next = node;
    }
    this.length += 1;
  }

  // - `get(position)` 获取对应位置的元素。
  get(position) {
    let node = this.getNode(position);
    return node && node.element;
  }

  getNode(position) {
    //判断越界
    if (position > this.length - 1 || position < 0) return null;

    let result = this.head;
    let index = 0;
    // while (i < position) {
    //   result = result.next;
    //   i++;
    // }
    while (index++ < position) {
      result = result.next;
    }
    return result;
  }

  // - `indexOf(element)` 返回元素在链表中的索引。如果链表中没有该元素就返回-1。
  indexOf(element) {
    if (this.isEmpty()) {
      return -1;
    }
    let temp = this.head;
    let index = 0;
    while (temp) {
      if (temp.element === element) {
        return index;
      }
      temp = temp.next;
      index++;
    }
    return -1;
  }

  // - `update(position, element)` 修改某个位置的元素。
  update(position, element) {
    let node = this.getNode(position);
    node.element = element;
  }

  // - `removeAt(position)` 从链表的特定位置移除一项。
  removeAt(position) {
    //1.判断越界
    // if (position < 0 || position > this.length - 1) return null;

    if (position === 0) {
      this.head = this.head.next;
    } else {
      let index = 0;
      let current = this.head;
      while (index++ < position) {}
    }
    // let i = 0;
    // let temp = this.head;
    // while (i < position) {
    //   temp = temp.next;
    //   i++;
    // }

    // temp.next = temp.next.next;

    let preNode = this.getNode(position - 1);
    if (!preNode) return;
    if (position === this.length - 1) {
      preNode.next = null;
      this.length -= 1;
    } else {
      preNode.next = preNode.next.next;
      this.length -= 1;
    }
  }

  // - `remove(element)` 从链表中移除一项。
  remove(element) {
    let position = this.indexOf(element);
    if (position !== -1) {
      this.removeAt(position);
    }
  }

  // - `isEmpty()` 如果链表中不包含任何元素，返回 trun，如果链表长度大于 0 则返回 false。
  isEmpty() {
    return this.length === 0;
  }
  // - `size()` 返回链表包含的元素个数，与数组的 length 属性类似。
  size() {
    return this.length;
  }
  // - `toString()` 由于链表项使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。
  toString() {
    let result = "";
    let node = this.head;
    while (node) {
      result += `${node.element} `;
      node = node.next;
    }
    return result;
  }
}
