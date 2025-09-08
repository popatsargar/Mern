// let arr=[1,2,4,4,6,6,6,8] 1) find last index of 6; 2) and find first index of 6
arr=[1,2,4,4,6,6,6,8];
let firstIndexOf6=-1;
let lastIndexOf6=-1;
for(let i=0;i<arr.length;i++){
    if(arr[i]===6){
        if(firstIndexOf6==-1){
            firstIndexOf6=i;
        }
        lastIndexOf6=i;
    }
}
if(firstIndexOf6!==-1)
console.log({firstIndexOf6,lastIndexOf6});
else
    console.log("6 doesnt exist");
//TC=O(N)
//BINARY SEARCH->TC==O(logN)-> always search in search space

// find square root of a number using binary search
//find the index of target in A
//let arr2=[1,4,6,7,10,15,21,30]; target =10;
 arr = [1, 4, 6, 7, 10, 15, 21, 30];
let target = 10;

function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target)
       return mid;
    else if (arr[mid] < target)
       low = mid + 1;
    else 
      high = mid - 1;
  }
  return -1;
}

console.log("The target is an index of :",binarySearch(arr, target)); 


/* write a function to print all the palindromic substrings of a string */
function ispalindrome(str1){
      let reversed = "";
      str1.trim();
  for (let i = str1.length - 1; i >= 0; i--) {
    reversed += str1[i];   
  }
  if(str1===reversed){
    return true;
  }
  else {
    return false;
  }
}
const str1= "race a car";
console.log("is palindrome:",ispalindrome(str1));
// time complexity= O(n)
