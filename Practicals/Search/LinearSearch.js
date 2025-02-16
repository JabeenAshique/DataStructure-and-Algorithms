// Given an array of integers nums and an integer target, return the index of the first occurrence of target in nums. 
// If target is not found, return -1.


function search(nums,target){
for(let i=0;i<=nums.length-1;i++){
    if(nums[i]==target){
        return i
    }
}   
     return -1;
    
}


console.log(search([1,2,3,4,5,6,7],7));
