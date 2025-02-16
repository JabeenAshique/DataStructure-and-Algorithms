arr =[2,4,4,1,1,5];

let set = new Set();
for(el of arr){
    if (set.has(el)){
        set.add(el)
    }
}
console.log(set)