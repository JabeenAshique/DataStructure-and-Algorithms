 # Memory Management
Memory management refers to how we manage data in memory and the different ways of optimizing memory usage.

📌 Real-Life Analogy:

Imagine you have a storage room (memory) where you store boxes (variables). If you don’t remove unused boxes, the room fills up, making it difficult to find space for new ones. This is similar to memory leaks in programming.

📌 How JavaScript Handles Memory?

# JavaScript memory management consists of three phases:

- Memory Allocation → When a variable is created, memory is allocated.
- Memory Usage → Data is stored and manipulated in memory.
- Memory Deallocation → Garbage Collector frees unused memory.

# Types of Memory Management
Static memory allocation – Memory is allocated at compile time and cannot be changed later.

Dynamic memory allocation – Memory is allocated at runtime, allowing flexibility.

# Types of Memory Used in Memory Management

- Stack memory – Used to store primitive data types and function call executions. It follows LIFO (Last In, First Out).
  
  function example() {
    let x = 10;  // Stored in Stack
    let y = 20;  // Stored in Stack
    console.log(x + y);
    }
    example();


- Heap memory – Used to store objects, arrays, and functions. It allows dynamic memory allocation.

let obj1 = { name: "Alice" };  // Stored in Heap
let obj2 = obj1;  // Reference to the same memory location
obj2.name = "Bob";

console.log(obj1.name); // "Bob" (Both point to the same object)


- Virtual memory – Part of the hard disk used as extra RAM when physical memory is full.

# Memory Management Issues

- Memory leak – When allocated memory is not released, causing the program to consume more memory until it runs out of space.

    let arr = [];
    setInterval(() => {
    arr.push(new Array(1000000).fill('*')); // Keeps consuming memory
    }, 1000);


- Heap overflow – When new data keeps getting added without removing old data, causing memory overflow.

    function heapOverflow() {
    let arr = [];
    while (true) {
        arr.push(new Array(1000000).fill('*'));  // Keeps allocating
        }
    }
    heapOverflow();


# Garbage Collection

Garbage collection is the automatic process of freeing unused memory by removing objects that are no longer needed.

    let user = { name: "Alice" };
    user = null;  // The object is now eligible for garbage collection
