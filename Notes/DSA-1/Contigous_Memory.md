# Contiguous Memory Allocation  
- Contiguous Memory Allocation refers to storing elements of data in consecutive memory locations.  
  This ensures fast and efficient memory usage.

---

## Advantages of Contiguous Memory Allocation in DSA  
✔ Fast Access – Direct indexing via array indexing (O(1)).  

✔ Efficient Cache Usage – Sequential data access improves CPU cache performance.  

✔ Simple Memory Management – Easy allocation & deallocation in a single block.  

---

## Disadvantages of Contiguous Memory Allocation  

✖ Fixed Size – Arrays require pre-allocation of memory, making resizing difficult.  

✖ Wastage (Internal Fragmentation) – Extra space is wasted if the array size is larger than required.  

✖ Insertion & Deletion Complexity – Requires shifting elements (O(n)), making operations slow.  

---

## Types of Contiguous Memory Allocation in DSA  
- Array  
- Stack  
- Queue  

---

# Non-Contiguous Memory Allocation  

- Non-Contiguous Memory Allocation refers to a memory management technique where data elements are stored in random or scattered memory locations, connected via pointers or references instead of occupying a continuous block.

---

## Types of Non-Contiguous Memory Allocation  
- Linked List  
- Graph  
- Tree  
- Trie  
- Hash Table  

---

## When to Use Which?  

✔ Use arrays when fast indexing (O(1)) is required, and the size is fixed.  

✔ Use linked lists when frequent insertions/deletions occur dynamically.  

✔ Use graphs & trees when relationships between elements are complex.  
