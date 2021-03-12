import Queue from "./queue";

//击鼓传花游戏。 传入一个姓名数组，从1数，数到n的人出列，求仅剩一人时此人的名字
export default function passGame(nameList, n) {
  let queue = new Queue();

  for (let name of nameList) {
    queue.enqueue(name);
  }
  // console.log("初始队列",  queue.toString());
  //仅剩一人时停止循环，此时队列中的name即为结果
  while (queue.size() > 1) {
    // console.log("当前队列：", queue.toString());
    //数到第n个时的人出队（从0开始，第n个即为n-1个）
    for (let i = 0; i < n - 1; i++) {
      //第一个人出队列，并加入队列末尾
      queue.enqueue(queue.dequeue());
    }

    //第n个人出队列，不再入队
    queue.dequeue();
    // console.log("出队：", queue.dequeue());
  }

  //返回最后剩下的人
  let lastName = queue.front();
  return lastName;

  //可返回该人在原数组中的位置
  // return nameList.indexOf(lastName);
}
