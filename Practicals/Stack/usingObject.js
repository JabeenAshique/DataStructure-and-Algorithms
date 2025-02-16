class stack {
    constructor(){
        this.item = {},
        this.head = 1
    }
    push(el){
        this.item[this.head++] = el
        return `pushed element is ${el}`
    }
    pop(){
    let poppedvalue = this.item[this.head-1];
    delete this.item[this.head-1];
    this.head--;
    return `popped values is ${poppedvalue}`        
    }
    peek(){
        let peak = this.item[this.head-1];
        return `peak value ${peak}`;
    }
    size(){
        return `size is ${this.head}`;
    }
}
let stk = new stack();

console.log(stk.push(10));
console.log(stk.push(20));
console.log(stk.push(30));
console.log(stk.pop());
console.log(stk.peek());
console.log(stk.size());