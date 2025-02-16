function isPalindrome(n) {
   
    return isPalindrome(n.reverse())==n;
}
console.log(isPalindrome(121));
