/**
 * Chris Samuel Jr
 * chris@kayode.me
 * 
 * github: Alayode
 * 
 * merge-sort-ts
 */


 /**
 * merge sort is a recursive algorithm for sorting that decompose laerge problem of sorting an array.
 * into subproblems that are each a  step closer to being solved.
 */


export function mergeSort(array: number[]): number[] {
  if(array.length <= 1) {
    console.log(array);
    return array;
  }
  
//we first find the middle index by dividing the array length by two.
const middle = Math.floor(array.length / 2 );
// console.log(middle);

// We use two variables to track the index into the left and the right segments
const left = array.slice(0, middle);
const right = array.slice(middle); 

return merge(mergeSort(left), mergeSort(right))

}




const array = [10,9,8,7,6,5,4,3,2,1,0]; // a single element in the array is already sorted.

mergeSort(array); // returns 5