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
  }




  const array = [1]; // a single element in the array is already sorted.