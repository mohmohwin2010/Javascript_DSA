/*
Question 1 : sum of natural numbers from 1 to n.
eg. sum of 1 to 5: 1+2+3+4+5=15
*/

function sumNum(num){
    let sum = 0;
    for(let i=1; i<=num; i++){
        sum = sum + i;
    }
    return sum;

    // return num*(num+1)/2;//this is advance idea. need to understand well.it's run time less take than above code
}
console.log(sumNum(5));
console.log(sumNum(10));
 console.log(sumNum(15));
 console.log(sumNum(6));
