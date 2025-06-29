// Question 3 : How can you check if two arrays are equal?
const arrA = [1, 2, 3, 4];
const arrB = [5, 3, 2, 1];
const checkArrayEqual = (a1, a2) => {
    // if(a1.length === a2.length){
    //     for(let i=0; i<a1.length; i++){
    //         if(a1[i] === a2[i]) return true
    //         else return false
    //     }
    // }
    // else return false;

    return arrA.length === arrB.length && arrA.every((v, i, arr) => arrA[i] === arrB[i] )
}

console.log(checkArrayEqual(arrA, arrB));
//summarization : .every((v, i, arr))
//.every => Tests every element in array, returns true only if all pass
//(v, i, arr) is callback function
//v is value of current element
// is index of current element
//arr is current array (arrA)
//.every and .some work simlary but .every return true when all test pass on the otherside .some return true when any of test is passed