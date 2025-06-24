/*
Question 1 : sum of natural numbers from 1 to n.
eg. sum of 1 to 5: 1+2+3+4+5=15
*/

function sumNum(num){
    let sum = 0;//it run 1 time operation so O(1)
    for(let i=1; i<=num; i++){//it run num times operation , O(num)
        sum = sum + i;//it run num times operation , O(num)
    }
    return sum;//it run 1 time operation , O(1)
//so overall time complexity is O(n+2) but we can skip constant so time complexity is O(2)
//space complexity is O(1) because only few variables are used sum, i and there is no extra data structure.
    //**** */ return num*(num+1)/2;//this is advance idea. need to understand well.it's run time less take than above code
}
console.log(sumNum(5));
console.log(sumNum(10));
 console.log(sumNum(15));
 console.log(sumNum(6));


