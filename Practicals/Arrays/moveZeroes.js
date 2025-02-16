/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * leet code number 283
 */
var moveZeroes = function(nums) {
    let j=0
    for(i=0;i<nums.length;i++){
        if(nums[i]!==0){
            [nums[i],nums[j]] = [nums[j],nums[i]]
            j++;
        }
    }
    return nums
};

console.log(moveZeroes([5,6,8,5,6,0,8,0,7,4,5,0]));
