function bubble(nums){
for(let i=0;i<nums.length-1;i++){
    for(j=0;j<nums.length-i-1;j++){
        if(nums[i]<nums[j]){
            [nums[i],nums[j]]=[nums[j],nums[i]]
        }
    }
}
return nums
}
console.log(bubble([1,5,10,4,12,2,6,8]));
