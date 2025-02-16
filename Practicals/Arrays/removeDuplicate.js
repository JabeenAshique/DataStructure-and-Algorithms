// Remove duplicates from the array


// const remove = ()=>{
//     let array =[1,55,4,55,8,9,6,4]
//     let res =[]
//     for(let i=0;i<array.length-1;i++){
//        if(array[i].indexOF() == index){

//        }
//     }
//     return res;
// }

// console.log(remove());


// remove duplicates from array

function removedupli(nums) {

    let arr = []

    for (let i = 0; i < nums.length; i++) {
        if (arr.indexOf(nums[i]) === -1) {
            arr.push(nums[i])
        }
    }
    return arr

}
console.log(removedupli([2, 4, 5, 4, 6, 6, 3, 7])) 