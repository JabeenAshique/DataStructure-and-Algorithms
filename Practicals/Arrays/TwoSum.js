//leetcode number 1
const twoSum = (arr,n)=>{
let map = new Map();
for(let i=0;i<arr.length;i++){
    let complement = n-arr[i]; //5-1=4 // 5-2=3

    if(map.has(complement)){ // null // null
        return [map.get(complement),i];
    }
    else{
        map.set(arr[i],i)//1,0 // 2,3
    }
}
}
let arr=[1,2,3,4,5]
console.log(twoSum(arr,5));
