function rotatedarray(arr,k){
    let size=arr.length;
    const rotate = arr.splice(size-k,k);
    arr.unshift(...rotate);
    return arr;
}
let arr=[1,22,3,4,5]
let k=22%arr.length // handle k>size cases
console.log(rotatedarray(arr,k))
