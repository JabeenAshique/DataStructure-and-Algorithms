class node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    insertionAtbeginning(data){
       let newNode = new node(data);
        newNode.next = this.head;
        this.head = newNode
    }
    insertionAtend(data){
        let newNode = new node(data);
        if(this.head == null){
            this.head = newNode;
            return
        }
        let current = this.head;
        while(current.next){
            current= current.next;
        }
        current.next = newNode;
    }
    insertionAtmiddle(data,point){
        let newNode = new node(data);
        if(this.head==null){
            newNode.next = this.head;
            this.head = newNode
            return;
        }
        let  current = this.head
        while( current && current.data !== point){
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
    }
    deleteAtBeginning(){
        if(this.head == null){
            console.log("No Data Exist");   
        }
            this.head = this.head.next;
    }
    deleteAtEnd(){
        if(this.head == null){
            console.log("No Data Exist");   
            return
        }
        if (this.head.next == null) {
            this.head = null;
            return;
        }
        
           let current = this.head;
           while (current.next.next){
            current=current.next;
           }
           current.next = null;
    }
    deleteAtMiddle(point){
        if(this.head == null){
            console.log("No data exists");
            return
        }
        let current = this.head;
        let prev = null
        while (current.data !== point){
            prev = current
            current = current.next;
        }
        prev.next = current.next;
    }
    display(){
        let temp = this.head;
        while (temp){
            console.log(temp.data);
            temp=temp.next;
        }
    }

}

let ll = new LinkedList();
ll.insertionAtbeginning(50);
ll.insertionAtbeginning(100);
ll.insertionAtend(25);
ll.insertionAtend(20);
ll.insertionAtend(30);
ll.insertionAtend(40);
ll.insertionAtmiddle(10,25)
ll.deleteAtBeginning()
ll.deleteAtEnd()
ll.deleteAtMiddle(10)
ll.display()