//Problem: Find the missing number in an array of size n where numbers are from 1 to n.


const missingNumber = (array) => {
    let n = array.length;
    let total = (n+1)*(n+2)/2;
    let sum = array.reduce((acc,val)=>acc+val,0);
    return total-sum;
}

