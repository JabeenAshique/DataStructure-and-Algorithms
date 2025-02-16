class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  class Stack {
    constructor() {
      this.top = null;
      this.size = 0;
    }
    push(data) {
      let newNode = new Node(data);
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
      return this.top.data;
    }
    pop() {
      if (this.top === null) {
        console.log("Stack is Empty");
        return;
      }
      let poppedData = this.top.data;
      this.top = this.top.next; // ✅ Fix: Remove the top node
      this.size--;
      return poppedData
    }
    peek() {
      return this.top.data;
    }
    Size() {
     return this.size
    }
    removenode(n){
        let current = this.top;
        let prev = null
        while(current.data !== n){
            prev= current
            current=current.next
        }
        prev.next = current.next;
        this.size--;
    }
    print (){
        let current = this.top;
        while (current){
            console.log(current.data);
            current=current.next
        }
    }
  }
  
  let stk = new Stack();
  
  console.log(stk.push(50));
  console.log(stk.push(100));
  console.log(stk.push(150));
  console.log(stk.push(200));
  console.log(stk.pop());
  console.log(stk.peek());
  console.log(stk.Size());
  console.log("before remove");
  
  stk.print()
  stk.removenode(100)
  console.log("Removing element is 100");

  stk.print()
  