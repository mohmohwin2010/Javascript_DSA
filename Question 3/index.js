/*
Question 3 : count the number of digit of a number
input : 47836
output : 5
explaination
===========
47836
4783
47
4
0

input : -87342
output : 5

Math.abs() remove negative sign.

*/

// function countDigit(num){
//     let num1 = Math.abs(num);
//     let count = 0;
    
//     // do{
//     //     count++;
//     //     num1 =  Math.floor(num1/10);
//     // }while(num1 > 0);
//     while(num1 > 0){
//         count = count + 1;
//         num1 = Math.floor(num1/10)
//     }
//     return count;
// }
// console.log(countDigit(478036))
// console.log(countDigit(-89234532))

// my practise
function countDigitNum(num){
    let numabs = Math.abs(num);
    let count = 0;
    while(numabs > 0){
        count = count + 1;
        numabs = Math.floor(numabs/10);
    }
    return count;
}
console.log(countDigitNum(432983));
