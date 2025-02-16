class node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    insertionAtbeginning(data){
        let newNode = new node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertDataAtEnd(data){
        let newNode = new node(data);

        if(this.head==null){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }

    traverse (){
        let temp= this.head
        while(temp){
            console.log(temp.data);
            temp = temp.next
        }
    }
    insertAtMiddle(data,point){
        let newNode = new node(data);
        if(this.head==null){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current && current.data !== point){
            current = current.next;
        }
        newNode.next=current.next;
        current.next=newNode;

    }


}
let ll = new LinkedList();


ll.insertionAtbeginning(50);
ll.insertionAtbeginning(100);
ll.insertionAtbeginning(150);
ll.insertionAtbeginning(200);
ll.insertionAtbeginning(250);
ll.insertDataAtEnd(25);
ll.insertAtMiddle(125,150)
ll.traverse();
