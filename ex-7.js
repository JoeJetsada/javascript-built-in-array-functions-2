function isPalindrome(string) {
  // Start coding here
  let reverseString = string.split('').reverse().join('');
  
  return (string === reverseString) ? true:false
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false