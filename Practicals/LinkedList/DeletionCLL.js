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

    deleteSpecificNode(value) {
        if (this.head == null) {
            console.log("List is empty.");
            return;
        }
        
        let temp = this.head;
        let prev = null;
        
        // If head needs to be deleted
        if (this.head.data === value) {
            while (temp.next !== this.head) {
                temp = temp.next;
            }
            this.head = this.head.next;
            temp.next = this.head;
            console.log(`Deleted node with value: ${value}`);
            return;
        }

        // Traverse to find the node
        do {
            prev = temp;
            temp = temp.next;
        } while (temp !== this.head && temp.data !== value);

        if (temp === this.head) {
            console.log("Node not found.");
            return;
        }

        prev.next = temp.next;
        console.log(`Deleted node with value: ${value}`);
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
cll.insertAtEnd(10);
cll.insertAtEnd(20);
cll.insertAtEnd(30);
cll.insertAtEnd(40);
cll.display();

cll.deleteAtBeginning();
cll.display();

cll.deleteAtEnd();
cll.display();

cll.deleteSpecificNode(20);
cll.display();
