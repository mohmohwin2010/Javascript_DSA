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