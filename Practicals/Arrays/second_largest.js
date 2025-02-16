//Find the second largest number in an array in js

let array=[1,2,3,4,5,65,7,8,99,55,10];

let sort = array.sort((a,b)=>b-a);

console.log("Second Largest value is",sort[1]);


//O(n log n) time complexity