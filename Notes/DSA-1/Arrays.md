# What is an Array?

An array in JavaScript is a data structure used to store multiple values in a single variable. It is an ordered collection where each value (element) is assigned an index, starting from 0. Arrays can hold any type of data, including numbers, strings, objects, and even other arrays.

# How JavaScript Stores Data as an Array?

- JavaScript arrays are dynamic and heterogeneous, meaning:

- They can grow and shrink dynamically.
- They can store different data types in the same array.
- Internally, JavaScript uses an indexed object structure for arrays,
  meaning it treats arrays as objects with numeric keys.

# Operations in Data Structure Using Arrays

Arrays are one of the most fundamnetal data structure in cs.

# 1.Initilization(init)

# Definition

- Creating an array and assigning initial values.

# Ways to initilize an Array in Javascript

// Method 1 : Using array lietral

let arr = [10,20,30,40];

// Method 2 : Using Array()

let arr =  new Array(5); // Creating an array with empty slots.

// Method 3 : empty array.

let arr = [];


# 2. Setting Values(set)

- Definition :
  
  Updating or modifying elements at a specific index.

  let arr=[20,25,63];

  arr[2] = 50;

  console.log(arr); // Output [20,25,50];

  # 3. Traversal

  - Definition:
  
  Accessing and Printing all elements in array.

  let arr = [10, 20, 30, 40, 50];

// Using for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Using forEach
arr.forEach((element) => console.log(element));

// Using for...of loop
for (let element of arr) {
    console.log(element);
}

# Time Complexity: O(n) (Since we are visiting each element once)


# 4. Insertion

Insertion means adding an element at the begining, middle, or end.

# A.Insert at the End(push)

let arr = [10, 20, 30];
arr.push(40); // Insert at end
console.log(arr); // Output: [10, 20, 30, 40]

Time Complexity: O(1) (constant time);

# B. Insert at Beginnig (unShif)

- Definition :

Adds an element at index 0.

let arr = [10,20,30];

arr.unashift(5);

console.log(arr); // [5,10,20,30];
T = O(n) (Shift all elements to the right)

# Insert at specific index

- Add an element at given position.

int arr = [10,20,30]

arr.splice(1,0,15);

Time complexity:O(n) // Shift elements after index

# 5. Deletion

- Removing an element from beginnig,middle, or end.

# A. Deletion from the end.(Pop)

- Removes the last element.

let arr = [10, 20, 30, 40];

arr.pop(); // Remove last element

console.log(arr); // Output: [10, 20, 30]

Time Complexity : O(1) (constant time)

# B. Delete from the beginning(Shift)

- Removes the first element

let arr = [10, 20, 30];

arr.shift(); // Remove first element

console.log(arr); // Output: [20, 30]

Time Complexity : O(n)(shift all elements left)

# C. Delete from a Specific Index(Splice)

- Removes an element from a given position.

let arr =[10,20,30]

arr.splice(2,1);

console.log(arr) //[10,20]
