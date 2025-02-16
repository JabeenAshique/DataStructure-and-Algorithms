function reverse(n){
    if (n==0){
        return 0;
    }
    console.log(n);
    
    return reverse(n-1)
}
console.log(reverse(5));
