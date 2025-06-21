/*
Solving Palindrome Digit

input : x = 123
output : true
explaination
=============
123 reads as 123 from left to right and right to left. Therefore it is true.
-123 reads as -123 from left to right but right to left result is 321- so it is false.
*/

function palindrom(x){
  let copyNumber = x;
  let resverseNumber = 0;


    while(copyNumber>0){
        let lastDigit = copyNumber%10;
        resverseNumber = resverseNumber*10 + lastDigit;
        copyNumber = Math.floor(copyNumber/10)
    }
  
    if(x===resverseNumber) return true;
    else return false;
}
// console.log(palindrom(12345432122))
console.log(palindrom(-121))
console.log(palindrom(121))