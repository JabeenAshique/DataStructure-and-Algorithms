class queue {
    constructor(){
        this.item = []
    }
    enquue(ele){
        this.item.push(ele);
    }
    dequeue(){
        if(this.isEmpty()){
            return "underflow";
        }
        return this.item.shift();
    }
    peeak(){
        return this.item[0];
    }
    isEmpty(){
        return this.item.length == 0;
    }
    size(){
        return this.item.length;
    }
    print(){
        for(let i=0;i<this.size;i++){
            console.log(this.item[i]);    
        }
    }
}
let q = new queue();
q.enquue(10);
q.enquue(20);
q.enquue(30);
q.dequeue();
q.peeak();
q.size()
console.log(q.print());

