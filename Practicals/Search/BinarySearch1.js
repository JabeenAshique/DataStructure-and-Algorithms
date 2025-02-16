//Given a sorted array nums and an integer target, return the index of the first occurrence of target in nums. 
// If the target is not found, return -1.

function search(nums,target){
    let firstOcuurence=-1
    let left=0;
    let right = nums.length-1;
    while(left <=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]==target) {
             firstOcuurence = mid;
            right = mid-1
        }
        if(nums[mid] < target) {
            left = mid+1
        }
        else {
            right = mid-1
        }
        
    }
    return firstOcuurence

}

console.log(search([1,2,3,5,5,6,7,8,9],5))