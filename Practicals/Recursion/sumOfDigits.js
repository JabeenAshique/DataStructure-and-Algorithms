
// function summ(n){
//     var sum=0
//     while(n>0){
//       sum += n%10;
//         n=Math.floor(n/10)
        
//     }
//     return sum
// }
// console.log(summ(1234));


function sumOfDigits(n){
    let total=0
if(n==0){
    return 0;
}
else {
     
     return n%10 +sumOfDigits(Math.floor(n/10))
} 
}
console.log(sumOfDigits(1234));
