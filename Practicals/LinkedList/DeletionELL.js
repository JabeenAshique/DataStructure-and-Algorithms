class node  {
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
        this.head= newNode;
    }
    DeleteDataAtBeginning(){
        if(this.head == null){
            console.log("No data Exist");
        }
        this.head = this.head.next;
    }
    DeleteDataAtEnd(){
    if(this.head == null){
        console.log("No Data Exist");
        return
    }
    let current = this.head;
    while(current.next.next){
        current= current.next;
    }
    current.next= null
    }
    display(){
        let temp = this.head
        while (temp){
            console.log(temp.data);
            temp = temp.next
        }
    }
}

let ll = new LinkedList();

ll.insertionAtbeginning(50)
ll.insertionAtbeginning(100);
ll.insertionAtbeginning(150);
ll.insertionAtbeginning(200);
ll.insertionAtbeginning(250);
ll.DeleteDataAtBeginning()
ll.DeleteDataAtEnd()
ll.display()