class stack {
    constructor(){
        this.item = []
    }
    push(data){
        this.item.push(data);
        return data
    }
    pop(){
        if(this.item.length == 0){
            console.log("Stack is Empty");
            
        }
       return this.item.pop()
    }
    peek(){
        if(this.item.length == 0){
            console.log("Stack Doesn't have any value");
        }
         return this.item[this.item.length - 1]
    }
    size(){
        return this.item.length;
    }
    sort(){
       let sortedstack = [...this.item].sort((a,b)=>b-a);
       console.log(sortedstack);
       
    }

}

let stk = new stack();

console.log(stk.push(25));
console.log(stk.push(15));
console.log(stk.push(55));
console.log(stk.push(35));
console.log(stk.push(45));
console.log(stk.push(5));
console.log(stk.push(65));
console.log(stk.pop());
console.log(stk.peek());
console.log(stk.size());
stk.sort()





