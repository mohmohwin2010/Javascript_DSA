/*
input : n=16
output : [1, 2, 4, 8]
*/
function fn(num){
    let arr = [];
    for(let i=1; i<num; i=i*2){
        arr.push(i)
    }
    return arr;
}
console.log(fn(2))// [ 1 ] => 2^1
console.log(fn(4))// [ 1, 2 ] => 2^2
console.log(fn(8))// [ 1, 2, 4 ] => 2^3
console.log(fn(16))// [ 1, 2, 4, 8 ] => 2^4
console.log(fn(32))// [ 1, 2, 4, 8, 16 ] => 2^5
//log is equal to base 2 so log n . Time complexity is O(log n)