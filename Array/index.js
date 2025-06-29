


//How to create empty array in Javascript?
// const arr = [];
// const newArr = new Array();
// const arr = [1, 2, 3, 4, "Hello", {name: "Moh"}, [1, 2, 3]];
const arr = ["Hello", {name: "Moh"}, [1, 2, 3]];
// const arr = [ "Hello", {name: "Moh"}];
// const arr = ["Orange", "Apple", "Banana", "Carrot", "Blueberry"];
// console.log(arr);

//How do you access the first and last elements of an array?
const firstElement = arr[0];//O(1)
const arrLength =  arr.length;
const lastElement = arr[arr.length - 1];
console.log(firstElement, arrLength, lastElement);

//How do you remove the last element from an array?
const removeLastElement = arr.pop();//O(1)
console.log(arr);

//How to add the element to the end of the array?
const addLastElement = arr.push(1);//O(1)
console.log(arr)

//How do you add the element to the start of the array?
arr.unshift("My");//O(N)
console.log(arr)

//How do you remove the element to the end of the array?
arr.shift();//O(N)
console.log(arr)

//How do you loop through an array in Javascript?
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

arr.forEach((x, i) => {
    console.log(x, i);//x is value and i is index
})

for(let x of arr){
    console.log(x);
}






//How to delete, add & update element from specific index
console.log(arr)
arr.splice(1, 3)// 1 is starting point and 3 is 3 places(1,2,3). delete specific index
console.log(arr)
arr.splice(1, 0, 5, 6)//add specific index
console.log(arr)
arr.splice(1, 1, 9, 10, 11)//update specifi index
console.log(arr)
//in this splice function. first parameter is the starting index and second parameter is count/placement index.


//splice vs slice
const subArr = arr.slice(1, 4);//[start, end] //return a copy of a section of an array.
console.log(subArr);

//shallow copy of array

const arrB = arr;
arrB.splice(1, 3)
console.log(arrB, arr)

//Deep Copy of array
const arr1 = [1, 2, 3, 4, "Hello", {name: "Moh"}, [1, 2, 3]];

const arrC = [...arr1];
const arrD = Array.from(arr1);
const arrE = arr1;
// arrC.splice(1,2);//start at index 1, remove 2 element
arrD.splice(1, 2)
// arrE.splice(1, 2)
console.log( arrD, arrE)

//summarization : const arrB=arr; is assigning array to arrB so everying updating at arrB, arr is will effect. [...arr1] and Array.from(arr1) is array copying.

//How to add two array in Javascript?
const arr2 = ["Big", "Small", "Short", "Long"];
const arr3 = ["Yello", "Orange", "White"]
const newArr = [...arr2, ...arr3];//combining two array as one array 
const arrConcat = arr2.concat(arr3);//combining two array as one array
const test = [arr2, arr3];//assigning two array as one array  

console.log(newArr, test)
console.log(arrConcat)
//summarization : if you want to copy array, you must use ... sign
