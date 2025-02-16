//Given an array of integers nums and an integer target, return the index of the last occurrence of target in nums. 
// If target is not found, return -1.

function search(nums,target){
let index = -1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
            index = i
        }
    }
  return index
}

console.log(search([1,2,5,5,7,6,5,5],10));
