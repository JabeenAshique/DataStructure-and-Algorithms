//Problem: Given an array of numbers, find the maximum and minimum elements.

let array=[1,2,3,4,5,65,7,8,99,55,10];

let max = Math.max(...array);
let min = Math.min(...array);

console.log("Maximum",max,"Minimum",min);



//O(n) time complexity

//Alternative approch (using loop - More Scalable)


let array2 = [5,88,99,66,88,55,11,22,33,44,100]
let max1=0,min1=Infinity;
for(let num of array2){
   if(num>max1) max1= num;
   if(num<min1) min1=num;
}
console.log("max:",max1,"min:",min1);
