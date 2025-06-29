//Question 4 : How to sort an array in ascending and descending order?
const arrySort = [4,-3,0,2,5,-9,7];
arrySort.sort();//O(NlogN);
console.log(arrySort);

//reverse sort
arrySort.sort((a, b) => b - a);
console.log(arrySort)