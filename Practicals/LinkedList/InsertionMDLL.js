


class node {
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
class DoublyLindedList {
    constructor() {
        this.head = null;
    }
    insertDataAtBeginning(data){
        let newNode = new node(data)
        newNode.next = this.head;
        if(this.head !== null){
            this.head.prev = newNode
        }
        this.head = newNode;
    }
    insertionAtend(data){
        let newNode = new node(data);
        if(this.head == null){
            this.head = newNode;
            return
        }
        let current =this.head;
        while(current.next){
            current= current.next
        }
        newNode.prev = current;
        current.next = newNode;
    }
    insertDataAtMiddle(data,point){
        let newNode = new node(data)
        if(this.head == null){
            console.log("Opps..Node is empty");
            return
        }
        let current = this.head;
        while (current && current.data !== point){
            current = current.next;
        }
        if(current.data !== point){
            console.log("Opps!.. No Data Found....");
        }
        newNode.prev = current
        newNode.next = current.next;
        if (current.next !== null) {
            current.next.prev = newNode; 
        }
        current.next = newNode;
    }
    display(){
        let temp = this.head
        while(temp){
            console.log(temp.data);
            temp = temp.next;
        }
    }
    reverse(){
        let current = this.head;
        while(current.next){
            current = current.next
        }
        let temp = current;
        console.log("reverse");
        
        while(temp){
            console.log(temp.data)
            temp = temp.prev;
        }
    }
}

let dll = new DoublyLindedList();

dll.insertDataAtBeginning(5);
dll.insertDataAtBeginning(10);
dll.insertionAtend(25)
dll.insertDataAtMiddle(15,5)
dll.display()
dll.reverse()
