# LinkedList

- LinkedList is a linear data structure. Where elements are stored in a seqence but not stored in a contigous memeory location.

- Each node in a linkedList Consist of two parts
  - Data – The actual value stored in the node.
  - Pointer (Next) – A reference to the next node in the list.
- Unlike arrays, linked lists allow dynamic memory allocation, making insertion and deletion operations more efficient.

# Types of Linked List

# 1. Singly LinkedList

- Each node contains a data field and a pointer to the next node.
- Operations: Insert, Delete, Search, Traverse.

# Structure:
- Head -> [Data | Next] -> [Data | Next] -> NULL

# 2. Doubly LinkedList

- Each node has two pointers: one pointing to the next node and another pointing to the previous node.
- Operations: Insert, Delete, Search, Traverse (both forward and backward).
  
# Structure:

- NULL <- [Prev | Data | Next] <-> [Prev | Data | Next] -> NULL

# 3. Circular LinkedList

- The last node points back to the first node, forming a circular structure.
- Can be singly or doubly circular.
- Operations: Insert, Delete, Search, Traverse (both forward and backward).

# Structure

- Head -> [Data | Next] -> [Data | Next] -> Head (Back to First Node)


# Operations

# 1. Insertion

- Insert at the beginning
- Insert at the end
- Insert at a specific position

# 2. Deletion

- Delete the first node
- Delete the last node
- Delete a node at a given position

# 3. Traversal

- Visiting each node in the list to access its data.

# 4. Search

- Finding an element in the list.

# 5. Reverse a Linked List

- Changing the direction of the pointers.

# 6.Detect Loop in a Linked List

- Using Floyd’s cycle detection algorithm (Tortoise and Hare method).


# LinkedList Leetcode questions

- pallindrom LinkedList
- Reverse LinkedList
- Reverse Nth node from the end of the list
- Add Two numbers
- Delete Node in the linkedList