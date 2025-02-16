class stack {
    constructor(){
        this.stack = []
    }
    push(val){
        this.stack.push(val)
    }
    print(){
        let even = []
        while(this.stack.length !==0){
            let popped = this.stack.pop(); // ✅ Fix: Correctly call pop(
            if(popped %2 ==0){
                even.push(popped)
            }
        }
       return even;
    }
}

let Stack = new stack();
Stack.push(10);
Stack.push(25);
Stack.push(24);

console.log(Stack.print());
