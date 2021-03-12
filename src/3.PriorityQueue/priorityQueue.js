import Queue from "../2.Queue/queue";

class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

export default class PriorityQueue extends Queue {
  constructor() {
    super();
  }

  //重写enqueue()
  enqueue(element, priority) {
    //创建队列对象
    const queueElement = new QueueElement(element, priority);
    if (this.isEmpty()) {
      //1.队列为空直接添加
      this.items.push(queueElement);
    } else {
      //2.记录是否添加
      let isAdd = false;

      for (let i = 0; i < this.size(); i++) {
        //当元素优先级低于要添加的元素，则在这里添加新元素
        if (this.items[i].priority > priority) {
          this.items.splice(i, 0, queueElement);
          isAdd = true;
          break; //停止遍历
        }
      }
      if (!isAdd) {
        //遍历完所有元素都未添加新元素时，在最后添加新元素
        this.items.push(queueElement);
      }
    }
  }

  toString() {
    let result = "";
    for (let item of this.items) {
      result += `${item.element}-${item.priority} `;
    }
    return result.trimEnd();
  }
}
