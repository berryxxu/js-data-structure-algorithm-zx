import { Node, LinkedList } from "../4.LinkedList/linkedList";

class DLinkedNode extends Node {
  constructor() {
    super();
    this.prev = null;
  }
}
/**
 *
 *
 * @export
 * @class DLinkedList
 */
export class DLinkedList {
  constructor() {
    super();
    this.tail = null;
  }

  /**
   * `append(element)` 向链表尾部追加一个新元素。
   *
   * @param {*} element
   * @memberof DLinkedList
   */
  append(element) {
    //1.创建节点
    let node = new DLinkedNode(element);

    if (this.head === null) {
      //2.链表为空
      this.head = node;
      this.tail = node;
    } else {
      //3.链表不为空
      this.tail.next = node;
      this.tail = node;
    }
    //4.长度加1
    this.length++;
  }
  // - `insert(position, element)` 向链表的指定位置插入一个新元素。
  // - `getElement(position)` 获取指定位置的元素。
  // - `indexOf(element)` 返回元素在链表中的索引。如果链表中没有该元素就返回 -1。
  // - `update(position, element)` 修改指定位置上的元素。
  // - `removeAt(position)` 从链表中的删除指定位置的元素。
  // - `remove(element)` 从链表删除指定的元素。
  // - `isEmpty()` 如果链表中不包含任何元素，返回 trun，如果链表长度大于 0 则返回 false。
  // - `size()` 返回链表包含的元素个数，与数组的 length 属性类似。
  // - `toString()` 由于链表项使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。
  // - `forwardString()` 返回正向遍历节点字符串形式。
  // - `backwordString()` 返回反向遍历的节点的字符串形式。
}
