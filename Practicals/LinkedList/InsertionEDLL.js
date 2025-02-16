


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
        newNode.prev = null;
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
        current.next = newNode
    }
    display(){
        let temp = this.head
        while(temp){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

let dll = new DoublyLindedList();

dll.insertDataAtBeginning(5);
dll.insertDataAtBeginning(10);
dll.insertionAtend(25)
dll.display()
