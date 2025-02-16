const isBalanced= (s)=>{
let stk = [];
for (let i=0;i<s.length;i++){
    char= s[i]
    if (char =='{' || char =='(' || char =='['){
        stk.push(char)
    }else{
        if(stk.length==0) return false;
    }
   
        top = stk.pop();

        
    
    if((char =='}' && top!=="{") || (char =='(' && top!== ')')){
        return false
    }else{
        return true
    }
}
}
console.log(isBalanced('{','}'));
console.log(isBalanced('(',')','('));
