//Question 1 : How do you if an element exist in an array?
// function arrExit (arr, data){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === data) {
//             return true;
//         }      
//     }
//      return false;
// }

const arrExit = (arr, data) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === data) return true;
    }
    return false;
   
}
console.log(arrExit(["Mary", "Julia", "Sofia", "Harry"], "Sofia"));
console.log(arr.includes("Apple"));