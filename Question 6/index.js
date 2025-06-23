/*
Solving Missing Number.
https://leetcode.com/problems/missing-number/description/
input: nums = [3,0,1];
output: 2
explaination
===============
3+0+1=4
0+1+2+3=6;
6-4=2
*/
function missingNum(nums){
    let sum =0;
    
    for(let i=0; i< nums.length; i++){
        // console.log(nums[i])
        sum += nums[i];
        
       
    }
    console.log("sum : " , sum)
    let exptSum = nums.length*(nums.length+1)/2;

    return exptSum - sum;
}

console.log(missingNum([3,0,1]))
// console.log(missingNum([1,0]))
// console.log(missingNum([9,6,5,4,3,2,1,0]))