/*
Question 2 : Sum of digits of a number 

input : 1287 
output : 18

explaination
============
1287=> 1287%10 = 7 , 128%10 = 8 , 12%10 = 2 , 1%10 = 1
7+8+2+1=18

logic idea
==========
round 1 => 1287%10=>7 , Math.floor(1287/10)=> 128
round 2 => 128%10=>8 , Math.floor(128/10)=> 12
round 3 => 12%10=>2 , Math.floor(12/10)=> 1
round 4 => 1%10=> 1 , Math.floor(1/10)=> 0;
so... num>0
*/

function sumDigit(num){
    let sum=0;
   while(num > 0){
    sum += num%10;
    num = Math.floor(num/10);
   }
  
   return sum;

}
console.log(sumDigit(1287))
// time complexity is log based 10 N. So O(log~10 N).
// N=1287 => 4 times , log~10 1287 = 3 , 3+1 =4 . so log~10 1287 +1
// N=54326 => 5 times , log~10 54326 = 4 , 4+1 =5 . so log~10 54326 +1
// N=1234567 => 7 times , log~10 1234567 = 6 , 6+1 =7 . so log~10 1234567 +1
// time complexity is O(log~10 N +1). We can remove +1 constant value so time complexity is O(log~10 N).