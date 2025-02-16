const fibinocci  = (num)=>{
let fi=[0,1]
for(let i=2;i<=num;i++){
    fi[i]=fi[i-1]+fi[i-2];
}
return fi
}

console.log(fibinocci(10));

//1 1 2 3 4