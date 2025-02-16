function selection(nums){
    for(let i=0;i<nums.length-1;i++){
        let minIndex=i;
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] > nums[j]){
                minIndex =j
            }
        }
        [nums[i],nums[minIndex]] = [nums[minIndex],nums[i]]
    }
    return nums;
}

console.log(selection([1,55,8,10,2,40]));
