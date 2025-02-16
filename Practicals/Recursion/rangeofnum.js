// Create an array with range of numbers
// Input : Start:1 , End:5 =>>>>> Output
// start 1,2
function range(Start,end){
    if (Start > end){
        return[]
    }
    return [Start].concat(range(Start+1,end))
}
console.log(range(1,5));
