import Stack from "./stack";

export default function dec2bin(num) {
  let resultStr = "";
  let stack = new Stack();

  while (num > 0) {
    let remainder = num % 2;
    stack.push(remainder);
    //除数除以2，并向下取整
    num = Math.floor(num / 2);
  }

  while (!stack.isEmpty()) {
    resultStr += stack.pop();
  }

  return resultStr;
}
