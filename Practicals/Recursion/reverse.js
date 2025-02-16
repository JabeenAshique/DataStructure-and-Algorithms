
function string1(str){
    if (str.length == 0){
        return ""
    }
   let rev = str.slice(-1)
    return rev+string1(str.slice(0,-1))
}
console.log(string1("hello"));
