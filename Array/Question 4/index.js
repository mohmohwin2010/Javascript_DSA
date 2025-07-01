//Question 4 : How to sort an array in ascending and descending order?
const arrySort = [4,-3,0,2,5,-9,7];
arrySort.sort();//O(NlogN);
console.log(arrySort);

//reverse sort
arrySort.sort((a, b) => b - a);
console.log(arrySort)

//How to reverse array?
arrySort.reverse()
console.log(arrySort)

//Array manipulation : Map, Filter, Reduce
const newMapArr = arrySort.map((elem, i) => elem*elem);
console.log(newMapArr);

const newFilterArr = arrySort.filter((elem, i) => elem > 0);
console.log(newFilterArr);

const newReduceArr =  newFilterArr.reduce((acc, elem) => acc+elem, 0);
console.log(newReduceArr)

//Flat

const deep = [1, [2, [3, 8, [4]]]];
// console.log(deep)
// console.log(deep.flat(1));
// console.log(deep.flat(2));
// console.log(deep.flat(3))
console.log(deep.flat(Infinity)); // [1, 2, 3, 4]

//flat(1), it flattens only one level.

//flat(Infinity), it flattens everything, no matter how deep.

//filter and find
const findArr = deep.find((elem,i) => elem>0);
console.log(findArr);
