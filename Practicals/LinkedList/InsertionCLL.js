class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBeginning(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            newNode.next = newNode;  // Points to itself
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next !== this.head) {
                temp = temp.next;
            }
            newNode.next = this.head;
            temp.next = newNode;
            this.head = newNode;
        }
    }

    insertAtEnd(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            newNode.next = newNode;
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next !== this.head) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.next = this.head;
        }
    }

    deleteAtBeginning() {
        if (this.head == null) {
            console.log("List is empty.");
            return;
        }
        let temp = this.head;
        while (temp.next !== this.head) {
            temp = temp.next;
        }
        this.head = this.head.next;
        temp.next = this.head; // Update last node's next to new head
    }

    deleteAtEnd() {
        if (this.head == null) {
            console.log("List is empty.");
            return;
        }
        let temp = this.head;
        let prev = null;
        while (temp.next !== this.head) {
            prev = temp;
            temp = temp.next;
        }
        prev.next = this.head; // Second last node points to head
    }

    display() {
        if (this.head == null) {
            console.log("List is empty.");
            return;
        }
        let temp = this.head;
        console.log("Circular Linked List:");
        do {
            console.log(temp.data);
            temp = temp.next;
        } while (temp !== this.head);
    }
}

// Example Usage
let cll = new CircularLinkedList();
cll.insertAtBeginning(10);
cll.insertAtBeginning(20);
cll.insertAtEnd(30);
cll.display();
cll.deleteAtBeginning();
cll.deleteAtEnd();
cll.display();
