/*
https://leetcode.com/problems/fibonacci-number/description/
fibonacci number 
n<2
f(0)=0;
f(1)=1;


n>=2
f(n)=f(n-1)+f(n-2)
input: n=2
output: 1
explaination
f(2)=f(2-1)+f(2-2)=f(1)+f(0)=1+0=1;
f(3)=f(3-1)+f(3-2)=f(2)+f(1)=1+1=2;
f(4)=f(4-1)+f(4-2)=f(3)+f(2)=2+1=3;
*/

function fibonacci(num){
    if(num < 2){
        return num;
    }
    else{
        let prev =0, curr = 1, next=0;
        for(let i = 2; i<=num ; i++){
        next = prev + curr;
        prev = curr;
        curr = next
        }
        return next;
    }
}
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
console.log(fibonacci(6));