function countDigits(n)
{    
     if (n==0){
        return 0;
     }
     else{
        
      return 1+ countDigits(Math.floor(n/10))
     }
}
console.log(countDigits(1234));
