class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    insertDataAtBeginning(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        if (this.head !== null) {
            this.head.prev = newNode;
        }
        this.head = newNode;
    }

    insertionAtEnd(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        newNode.prev = current;
        current.next = newNode;
    }

    insertDataAtMiddle(data, point) {
        let newNode = new Node(data);
        if (this.head == null) {
            console.log("Oops.. List is empty.");
            return;
        }
        let current = this.head;
        while (current && current.data !== point) {
            current = current.next;
        }
        if (!current) {
            console.log(`Oops!.. No Data Found for value ${point}.`);
            return;
        }
        newNode.next = current.next;
        newNode.prev = current;
        if (current.next !== null) {
            current.next.prev = newNode;
        }
        current.next = newNode;
    }

    deleteAtBeginning() {
        if (this.head == null) {
            console.log("No data found.");
            return;
        }
        this.head = this.head.next;
        if (this.head !== null) {
            this.head.prev = null;
        }
        console.log("Deleted node at beginning.");
    }

    deleteAtEnd() {
        if (this.head == null) {
            console.log("No data found.");
            return;
        }
        if (this.head.next == null) { // ✅ Fix: Handle single-node case
            this.head = null;
            return;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
        console.log("Deleted node at end.");
    }

    deleteAtMiddle(point) {
        if (this.head == null) {
            console.log("No data found.");
            return;
        }
        let current = this.head;
        while (current && current.data !== point) {
            current = current.next;
        }
        if (!current) {
            console.log(`Node with value ${point} not found.`);
            return;
        }
        if (current.next !== null) {
            current.next.prev = current.prev;
        }
        if (current.prev !== null) {
            current.prev.next = current.next;
        } else {
            this.head = current.next; // ✅ Fix: If deleting head, update `this.head`
        }
        console.log(`Deleted node with value ${point}`);
    }

    display() {
        let temp = this.head;
        if (!temp) {
            console.log("List is empty.");
            return;
        }
        console.log("Doubly Linked List (Forward Traversal):");
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    reverse() {
        if (this.head == null) {
            console.log("List is empty.");
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        console.log("Doubly Linked List (Reverse Traversal):");
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }
}

// Example Usage
let dll = new DoublyLinkedList();
dll.insertDataAtBeginning(5);
dll.insertDataAtBeginning(10);
dll.insertionAtEnd(25);
dll.insertDataAtMiddle(15, 5);
dll.deleteAtBeginning();
dll.deleteAtEnd();
dll.deleteAtMiddle(5);

console.log("After Deletion:");
dll.display();
dll.reverse();
