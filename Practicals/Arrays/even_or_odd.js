// count even and odd numbers in an array

let array=[1,2,3,4,5,65,7,8,99,55,10];

even_count = array.filter((num)=>num%2==0).length;
odd_count = array.filter((num)=>num%2!=0).length;

console.log(even_count,odd_count);
