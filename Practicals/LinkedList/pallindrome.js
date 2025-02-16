//Leetcode 234

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
    display(){
        let str1 = "", str2 = ""
        let temp = this.head
        while (temp){
            str1 += temp.data// 1 // 2 //2 //1=> 1221
            str2 = temp.data + str2; //1 //21// 2 21 //1221
            temp = temp.next
        }
        
           if(str1 == str2){
            console.log("This is pallindrome");
           }else{
            console.log("this is not pallindrome");
            
           }
    }
}

let ll = new LinkedList();

ll.insertionAtbeginning(1)
ll.insertionAtbeginning(2);
ll.insertionAtbeginning(2);
ll.insertionAtbeginning(1);
ll.display()