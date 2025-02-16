let reverse = (s)=>{
let stack =[];
let rev = ""
for (let i =0;i<s.length;i++){
    stack.push(s[i])
}
while(stack.length !==0){
    rev += stack.pop()
}

return rev;
}
console.log(reverse("jabeen"));
