function odd (arr){
    if(arr.length ==0){
        return 0
    }
    el = arr[arr.length-1]
    let sum=0
    if(el%2 !== 0){
         sum += el
    }
    return sum+ odd(arr.slice(0,-1))
}
console.log(odd([1,2,3,4,5,6,7]));
