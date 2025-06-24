/*
sum of Matrix 
Matrix = [
[2, 4, 7],
[1, 0, 5],
[3, 9, 2]
]
*/

function sumMatrix(num){
    let sum = 0;// 1 times
    for(let i=0; i<num.length; i++){//n times
        for(let j=0; j<num.length; j++){//n times
            sum += num[i][j];//n*n = n^2 times
        }
    }
    return sum;//1 times
    //so n^2 +2. but we can skip constant value so overall time complexity is O(n^2)
}
console.log(sumMatrix([
[2, 4, 7],
[1, 0, 5],
[3, 9, 2]
]));