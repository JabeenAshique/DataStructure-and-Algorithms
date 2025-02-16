class node {
  constructor(data) {
    this.data = data;
    this.next = this.next;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  push(data) {
    let newNode = new node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
    console.log(this.top);
  }
  pop() {
    if (this.top === null) {
      console.log("Stack is Empty");
      return;
    }
    let poppedData = this.top.data;
    this.top = this.top.next; // ✅ Fix: Remove the top node
    this.size--;
    console.log(`Popped data is: ${poppedData}`);
  }
  peek() {
    let current = this.top;
    while (current.next) {
      current = current.next;
    }
    console.log(current.data);
  }
  Size() {
    console.log(this.size);
  }
}

let stk = new Stack();

stk.push(50);
stk.push(100);
stk.push(150);
stk.push(200);
stk.pop();
stk.peek();
stk.Size();
