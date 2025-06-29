//Question 2 : How do you check if an element exists in an array?
const findElementIndex = (arr, exitElem) => {
    for(let i=0; i< arr.length; i++){
        if(arr[i] === exitElem){
            return i
        }
    }
    return -1;
}
console.log(findElementIndex(arr, "Banana"))